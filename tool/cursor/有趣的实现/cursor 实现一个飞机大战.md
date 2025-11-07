# cursor 实现一个飞机大战

```js
用HTML5 Canvas做一个飞机大战的游戏。要求如下：
1） 有终局BOSS关卡，终局BOSS有自己独有的技能，终局BOSS消灭有难度，只有消灭终局BOSS游戏才能通关
2）击败敌机后会随机爆一些道具，道具可以增加子弹威力、效果，也可以让自己短时间内变大。道具吃到了就要马上用掉，有时间限制
3）击败敌机会有经验值，经验够了会升级，升级后会有更强大的子弹技能。
4） 会有一些小BOSS，小BOSS血厚一点，击败会爆一些更强的道具
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>飞机大战</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #222;
        overflow: hidden;
        font-family: Arial, sans-serif;
      }

      #gameContainer {
        position: relative;
      }

      #gameCanvas {
        border: 2px solid #444;
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
      }

      #startScreen,
      #gameOverScreen,
      #levelUpScreen,
      #victoryScreen {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
      }

      #gameOverScreen,
      #levelUpScreen,
      #victoryScreen {
        display: none;
      }

      button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 18px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #45a049;
      }

      #hud {
        position: absolute;
        top: 10px;
        left: 10px;
        color: white;
        font-size: 16px;
        text-shadow: 1px 1px 2px black;
      }

      .skill-option {
        margin: 10px;
        padding: 10px;
        border: 1px solid #4caf50;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .skill-option:hover {
        background-color: rgba(76, 175, 80, 0.3);
      }
    </style>
  </head>

  <body>
    <div id="gameContainer">
      <canvas id="gameCanvas" width="480" height="640"></canvas>

      <div id="hud">
        <div>生命: <span id="lives">3</span></div>
        <div>分数: <span id="score">0</span></div>
        <div>等级: <span id="level">1</span></div>
        <div>经验: <span id="exp">0</span>/<span id="expNeeded">100</span></div>
        <div>关卡: <span id="stage">1</span></div>
        <div id="bossHealthContainer" style="display: none;">
          BOSS生命: <span id="bossHealth">100</span>
        </div>
      </div>

      <div id="startScreen">
        <h1>飞机大战</h1>
        <p>使用方向键移动，空格键射击</p>
        <p>击败敌人获得经验升级</p>
        <p>收集道具增强能力</p>
        <p>最终击败BOSS赢得胜利!</p>
        <button id="startButton">开始游戏</button>
      </div>

      <div id="gameOverScreen">
        <h1>游戏结束</h1>
        <p>最终得分: <span id="finalScore">0</span></p>
        <p>达到等级: <span id="finalLevel">1</span></p>
        <button id="restartButton">重新开始</button>
      </div>

      <div id="levelUpScreen">
        <h1>等级提升!</h1>
        <p>选择一项升级:</p>
        <div class="skill-option" data-type="fireRate">
          <h3>射击速度</h3>
          <p>提高射击速度</p>
        </div>
        <div class="skill-option" data-type="bulletPower">
          <h3>子弹威力</h3>
          <p>增加子弹伤害</p>
        </div>
        <div class="skill-option" data-type="multiShot">
          <h3>多重射击</h3>
          <p>同时发射多颗子弹</p>
        </div>
      </div>

      <div id="victoryScreen">
        <h1>胜利!</h1>
        <p>你击败了最终BOSS!</p>
        <p>最终得分: <span id="victoryScore">0</span></p>
        <p>达到等级: <span id="victoryLevel">1</span></p>
        <button id="victoryRestartButton">再来一次</button>
      </div>
    </div>

    <script>
      // 游戏常量
      const CANVAS_WIDTH = 480;
      const CANVAS_HEIGHT = 640;
      const PLAYER_SPEED = 5;
      const ENEMY_SPEED = 2;
      const BULLET_SPEED = 7;
      const POWERUP_DURATION = 10000; // 10秒
      const BOSS_SKILL_INTERVAL = 3000; // 3秒

      // 游戏变量
      let canvas, ctx;
      let gameRunning = false;
      let animationFrameId;
      let keys = {};
      let player = {
          x: CANVAS_WIDTH / 2,
          y: CANVAS_HEIGHT - 60,
          width: 40,
          height: 40,
          speed: PLAYER_SPEED,
          lives: 3,
          score: 0,
          level: 1,
          exp: 0,
          expNeeded: 100,
          fireRate: 300, // 毫秒
          lastShot: 0,
          bulletPower: 1,
          multiShot: 1,
          isPoweredUp: false,
          powerUpType: null,
          powerUpEndTime: 0,
          sizeMultiplier: 1,
          invulnerable: false,
          invulnerableEndTime: 0
      };

      let bullets = [];
      let enemies = [];
      let powerUps = [];
      let explosions = [];
      let stage = 1;
      let enemySpawnTimer = 0;
      let enemySpawnInterval = 1000;
      let boss = null;
      let bossActive = false;
      let bossSkillTimer = 0;
      let bossBullets = [];
      // 需要在全局变量中添加 enemiesDefeatedThisStage
      let enemiesDefeatedThisStage = 0;

      // 然后在敌人被击败的地方增加计数
      // 在 checkCollisions() 函数中找到敌人被击败的代码，添加：
      enemiesDefeatedThisStage++;
      // 初始化游戏
      function init() {
          canvas = document.getElementById('gameCanvas');
          ctx = canvas.getContext('2d');

          // 事件监听
          document.addEventListener('keydown', handleKeyDown);
          document.addEventListener('keyup', handleKeyUp);
          document.getElementById('startButton').addEventListener('click', startGame);
          document.getElementById('restartButton').addEventListener('click', restartGame);
          document.getElementById('victoryRestartButton').addEventListener('click', restartGame);

          // 等级升级选项
          document.querySelectorAll('.skill-option').forEach(option => {
              option.addEventListener('click', function () {
                  const type = this.getAttribute('data-type');
                  applyLevelUp(type);
                  document.getElementById('levelUpScreen').style.display = 'none';
                  gameRunning = true;
                  gameLoop();
              });
          });

          // 绘制开始屏幕
          drawStartScreen();
      }

      // 开始游戏
      function startGame() {
          document.getElementById('startScreen').style.display = 'none';
          resetGame();
          gameRunning = true;
          gameLoop();
      }

      // 重置游戏
      function resetGame() {
          player = {
              x: CANVAS_WIDTH / 2,
              y: CANVAS_HEIGHT - 60,
              width: 40,
              height: 40,
              speed: PLAYER_SPEED,
              lives: 3,
              score: 0,
              level: 1,
              exp: 0,
              expNeeded: 100,
              fireRate: 300,
              lastShot: 0,
              bulletPower: 1,
              multiShot: 1,
              isPoweredUp: false,
              powerUpType: null,
              powerUpEndTime: 0,
              sizeMultiplier: 1,
              invulnerable: false,
              invulnerableEndTime: 0
          };

          bullets = [];
          enemies = [];
          powerUps = [];
          explosions = [];
          bossBullets = [];
          enemiesDefeatedThisStage = 0;
          stage = 1;
          enemySpawnTimer = 0;
          enemySpawnInterval = 1000;
          boss = null;
          bossActive = false;

          updateHUD();
          document.getElementById('bossHealthContainer').style.display = 'none';
      }

      // 重新开始游戏
      function restartGame() {
          document.getElementById('gameOverScreen').style.display = 'none';
          document.getElementById('victoryScreen').style.display = 'none';
          resetGame();
          gameRunning = true;
          gameLoop();
      }

      // 游戏结束
      function gameOver() {
          gameRunning = false;
          cancelAnimationFrame(animationFrameId);
          document.getElementById('finalScore').textContent = player.score;
          document.getElementById('finalLevel').textContent = player.level;
          document.getElementById('gameOverScreen').style.display = 'flex';
      }

      // 游戏胜利
      function victory() {
          gameRunning = false;
          cancelAnimationFrame(animationFrameId);
          document.getElementById('victoryScore').textContent = player.score;
          document.getElementById('victoryLevel').textContent = player.level;
          document.getElementById('victoryScreen').style.display = 'flex';
      }

      // 游戏主循环
      function gameLoop() {
          if (!gameRunning) return;

          animationFrameId = requestAnimationFrame(gameLoop);

          // 清空画布
          ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

          // 更新游戏状态
          update();

          // 绘制游戏
          draw();
      }

      // 更新游戏状态
      function update() {
          // 更新玩家
          updatePlayer();

          // 生成敌人
          updateEnemySpawn();

          // 更新子弹
          updateBullets();

          // 更新敌人
          updateEnemies();

          // 更新BOSS
          updateBoss();

          // 更新BOSS子弹
          updateBossBullets();

          // 更新道具
          updatePowerUps();

          // 更新爆炸效果
          updateExplosions();

          // 检查碰撞
          checkCollisions();

          // 检查玩家无敌状态
          if (player.invulnerable && Date.now() > player.invulnerableEndTime) {
              player.invulnerable = false;
          }

          // 检查道具持续时间
          if (player.isPoweredUp && Date.now() > player.powerUpEndTime) {
              player.isPoweredUp = false;
              player.powerUpType = null;
              player.sizeMultiplier = 1;
          }

          // 检查关卡进度
          checkStageProgress();
      }

      // 更新玩家
      function updatePlayer() {
          // 移动玩家
          if (keys['ArrowLeft'] && player.x > 0) {
              player.x -= player.speed;
          }
          if (keys['ArrowRight'] && player.x < CANVAS_WIDTH - player.width * player.sizeMultiplier) {
              player.x += player.speed;
          }
          if (keys['ArrowUp'] && player.y > 0) {
              player.y -= player.speed;
          }
          if (keys['ArrowDown'] && player.y < CANVAS_HEIGHT - player.height * player.sizeMultiplier) {
              player.y += player.speed;
          }

          // 玩家射击
          if (keys[' '] && Date.now() - player.lastShot > player.fireRate) {
              shoot();
              player.lastShot = Date.now();
          }
      }

      // 玩家射击
      function shoot() {
          const bulletWidth = 5;
          const bulletHeight = 15;

          if (player.multiShot === 1) {
              // 单发子弹
              bullets.push({
                  x: player.x + (player.width * player.sizeMultiplier) / 2 - bulletWidth / 2,
                  y: player.y,
                  width: bulletWidth,
                  height: bulletHeight,
                  speed: BULLET_SPEED,
                  power: player.bulletPower
              });
          } else if (player.multiShot === 2) {
              // 双发子弹
              bullets.push({
                  x: player.x + (player.width * player.sizeMultiplier) / 4 - bulletWidth / 2,
                  y: player.y,
                  width: bulletWidth,
                  height: bulletHeight,
                  speed: BULLET_SPEED,
                  power: player.bulletPower
              });

              bullets.push({
                  x: player.x + (player.width * player.sizeMultiplier) * 3 / 4 - bulletWidth / 2,
                  y: player.y,
                  width: bulletWidth,
                  height: bulletHeight,
                  speed: BULLET_SPEED,
                  power: player.bulletPower
              });
          } else if (player.multiShot === 3) {
              // 三发子弹
              bullets.push({
                  x: player.x - bulletWidth / 2,
                  y: player.y,
                  width: bulletWidth,
                  height: bulletHeight,
                  speed: BULLET_SPEED,
                  power: player.bulletPower
              });

              bullets.push({
                  x: player.x + (player.width * player.sizeMultiplier) / 2 - bulletWidth / 2,
                  y: player.y,
                  width: bulletWidth,
                  height: bulletHeight,
                  speed: BULLET_SPEED,
                  power: player.bulletPower
              });

              bullets.push({
                  x: player.x + (player.width * player.sizeMultiplier) - bulletWidth / 2,
                  y: player.y,
                  width: bulletWidth,
                  height: bulletHeight,
                  speed: BULLET_SPEED,
                  power: player.bulletPower
              });
          }
      }

      // 更新敌人生成
      function updateEnemySpawn() {
          if (!bossActive) {
              enemySpawnTimer += 16; // 假设60fps，每帧约16ms

              if (enemySpawnTimer >= enemySpawnInterval) {
                  spawnEnemy();
                  enemySpawnTimer = 0;

                  // 随着关卡提高，敌人生成速度加快
                  enemySpawnInterval = Math.max(200, 1000 - stage * 50);
              }
          }
      }

      // 生成敌人
      function spawnEnemy() {
          const size = 30 + Math.random() * 10;
          const isMiniBoss = Math.random() < 0.1; // 10%几率生成小BOSS

          if (isMiniBoss) {
              // 小BOSS
              enemies.push({
                  x: Math.random() * (CANVAS_WIDTH - size * 2),
                  y: -size * 2,
                  width: size * 2,
                  height: size * 2,
                  speed: ENEMY_SPEED * 0.7,
                  health: 10 + stage * 2,
                  maxHealth: 10 + stage * 2,
                  isMiniBoss: true,
                  color: '#FF4500'
              });
          } else {
              // 普通敌人
              enemies.push({
                  x: Math.random() * (CANVAS_WIDTH - size),
                  y: -size,
                  width: size,
                  height: size,
                  speed: ENEMY_SPEED * (0.8 + Math.random() * 0.4),
                  health: 1,
                  maxHealth: 1,
                  isMiniBoss: false,
                  color: '#6495ED'
              });
          }
      }

      // 生成BOSS
      function spawnBoss() {
          const size = 100;
          boss = {
              x: CANVAS_WIDTH / 2 - size / 2,
              y: 50,
              width: size,
              height: size,
              speed: ENEMY_SPEED * 0.5,
              health: 50 + stage * 10,
              maxHealth: 50 + stage * 10,
              isBoss: true,
              color: '#DC143C',
              skillTimer: 0,
              phase: 1
          };
          bossActive = true;
          document.getElementById('bossHealthContainer').style.display = 'block';
          updateBossHealth();
      }

      // 更新子弹
      function updateBullets() {
          for (let i = bullets.length - 1; i >= 0; i--) {
              bullets[i].y -= bullets[i].speed;

              // 移除超出屏幕的子弹
              if (bullets[i].y + bullets[i].height < 0) {
                  bullets.splice(i, 1);
              }
          }
      }

      // 更新敌人
      function updateEnemies() {
          for (let i = enemies.length - 1; i >= 0; i--) {
              enemies[i].y += enemies[i].speed;

              // 移除超出屏幕的敌人
              if (enemies[i].y > CANVAS_HEIGHT) {
                  enemies.splice(i, 1);
              }
          }
      }

      // 更新BOSS
      function updateBoss() {
          if (!boss) return;

          // BOSS移动模式
          boss.x += boss.speed;
          if (boss.x <= 0 || boss.x + boss.width >= CANVAS_WIDTH) {
              boss.speed *= -1;
          }

          // BOSS技能
          boss.skillTimer += 16;
          if (boss.skillTimer >= BOSS_SKILL_INTERVAL) {
              useBossSkill();
              boss.skillTimer = 0;
          }

          // BOSS阶段转换
          if (boss.health <= boss.maxHealth / 2 && boss.phase === 1) {
              boss.phase = 2;
              boss.speed *= 1.5;
          }
      }

      // BOSS使用技能
      function useBossSkill() {
          if (!boss) return;

          if (boss.phase === 1) {
              // 第一阶段技能：扇形子弹
              for (let i = -2; i <= 2; i++) {
                  bossBullets.push({
                      x: boss.x + boss.width / 2 - 5,
                      y: boss.y + boss.height,
                      width: 10,
                      height: 10,
                      speedX: i * 1.5,
                      speedY: 3,
                      power: 2,
                      color: '#FF6347'
                  });
              }
          } else {
              // 第二阶段技能：环形子弹 + 追踪子弹
              // 环形子弹
              for (let i = 0; i < 8; i++) {
                  const angle = (i / 8) * Math.PI * 2;
                  bossBullets.push({
                      x: boss.x + boss.width / 2 - 5,
                      y: boss.y + boss.height,
                      width: 10,
                      height: 10,
                      speedX: Math.cos(angle) * 2,
                      speedY: Math.sin(angle) * 2,
                      power: 1,
                      color: '#FF6347'
                  });
              }

              // 追踪子弹
              const angle = Math.atan2(
                  player.y - (boss.y + boss.height),
                  player.x - (boss.x + boss.width / 2)
              );
              bossBullets.push({
                  x: boss.x + boss.width / 2 - 7,
                  y: boss.y + boss.height,
                  width: 14,
                  height: 14,
                  speedX: Math.cos(angle) * 3,
                  speedY: Math.sin(angle) * 3,
                  power: 3,
                  color: '#FF0000',
                  isHoming: true
              });
          }
      }

      // 更新BOSS子弹
      function updateBossBullets() {
          for (let i = bossBullets.length - 1; i >= 0; i--) {
              const bullet = bossBullets[i];

              // 更新位置
              bullet.x += bullet.speedX;
              bullet.y += bullet.speedY;

              // 追踪子弹更新方向
              if (bullet.isHoming) {
                  const angle = Math.atan2(
                      player.y - bullet.y,
                      player.x - bullet.x
                  );
                  bullet.speedX = Math.cos(angle) * 3;
                  bullet.speedY = Math.sin(angle) * 3;
              }

              // 移除超出屏幕的子弹
              if (bullet.y > CANVAS_HEIGHT || bullet.y + bullet.height < 0 ||
                  bullet.x > CANVAS_WIDTH || bullet.x + bullet.width < 0) {
                  bossBullets.splice(i, 1);
              }
          }
      }

      // 更新道具
      function updatePowerUps() {
          for (let i = powerUps.length - 1; i >= 0; i--) {
              powerUps[i].y += 2;

              // 移除超出屏幕的道具
              if (powerUps[i].y > CANVAS_HEIGHT) {
                  powerUps.splice(i, 1);
              }
          }
      }

      // 更新爆炸效果
      function updateExplosions() {
          for (let i = explosions.length - 1; i >= 0; i--) {
              explosions[i].timer--;

              // 移除结束的爆炸效果
              if (explosions[i].timer <= 0) {
                  explosions.splice(i, 1);
              }
          }
      }

      // 检查碰撞
      function checkCollisions() {
          // 子弹与敌人碰撞
          for (let i = bullets.length - 1; i >= 0; i--) {
              const bullet = bullets[i];

              // 检查与普通敌人的碰撞
              for (let j = enemies.length - 1; j >= 0; j--) {
                  const enemy = enemies[j];

                  if (checkCollision(bullet, enemy)) {
                      // 敌人受伤
                      enemy.health -= bullet.power;

                      // 移除子弹
                      bullets.splice(i, 1);

                      // 检查敌人是否被击败
                      if (enemy.health <= 0) {
                          // 增加分数和经验
                          const expGain = enemy.isMiniBoss ? 20 : 10;
                          const scoreGain = enemy.isMiniBoss ? 200 : 100;

                          player.score += scoreGain;
                          player.exp += expGain;
                          enemiesDefeatedThisStage++;
                          // 生成爆炸效果
                          createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, enemy.width);

                          // 随机生成道具
                          if (Math.random() < (enemy.isMiniBoss ? 0.8 : 0.3)) {
                              spawnPowerUp(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, enemy.isMiniBoss);
                          }

                          // 移除敌人
                          enemies.splice(j, 1);
                      }

                      break;
                  }
              }

              // 检查与BOSS的碰撞
              if (boss && checkCollision(bullet, boss)) {
                  // BOSS受伤
                  boss.health -= bullet.power;
                  updateBossHealth();

                  // 移除子弹
                  bullets.splice(i, 1);

                  // 检查BOSS是否被击败
                  if (boss.health <= 0) {
                      // 增加分数和经验
                      player.score += 1000;
                      player.exp += 100;

                      // 生成爆炸效果
                      createExplosion(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width);

                      // 移除BOSS
                      boss = null;
                      bossActive = false;
                      document.getElementById('bossHealthContainer').style.display = 'none';

                      // 检查是否是最终BOSS
                      if (stage >= 5) {
                          victory();
                          return;
                      }
                  }

                  continue;
              }
          }

          // 玩家与敌人碰撞
          if (!player.invulnerable) {
              for (let i = enemies.length - 1; i >= 0; i--) {
                  const enemy = enemies[i];

                  if (checkCollision(player, enemy, player.sizeMultiplier)) {
                      // 玩家受伤
                      player.lives--;
                      updateHUD();

                      // 生成爆炸效果
                      createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, enemy.width);

                      // 移除敌人
                      enemies.splice(i, 1);

                      // 设置无敌时间
                      player.invulnerable = true;
                      player.invulnerableEndTime = Date.now() + 2000;

                      // 检查游戏是否结束
                      if (player.lives <= 0) {
                          gameOver();
                          return;
                      }

                      break;
                  }
              }

              // 玩家与BOSS碰撞
              if (boss && checkCollision(player, boss, player.sizeMultiplier)) {
                  // 玩家受伤
                  player.lives--;
                  updateHUD();

                  // 设置无敌时间
                  player.invulnerable = true;
                  player.invulnerableEndTime = Date.now() + 2000;

                  // 检查游戏是否结束
                  if (player.lives <= 0) {
                      gameOver();
                      return;
                  }
              }

              // 玩家与BOSS子弹碰撞
              for (let i = bossBullets.length - 1; i >= 0; i--) {
                  const bullet = bossBullets[i];

                  if (checkCollision(player, bullet, player.sizeMultiplier)) {
                      // 玩家受伤
                      player.lives--;
                      updateHUD();

                      // 移除子弹
                      bossBullets.splice(i, 1);

                      // 设置无敌时间
                      player.invulnerable = true;
                      player.invulnerableEndTime = Date.now() + 2000;

                      // 检查游戏是否结束
                      if (player.lives <= 0) {
                          gameOver();
                          return;
                      }

                      break;
                  }
              }
          }

          // 玩家与道具碰撞
          for (let i = powerUps.length - 1; i >= 0; i--) {
              const powerUp = powerUps[i];

              if (checkCollision(player, powerUp, player.sizeMultiplier)) {
                  // 应用道具效果
                  applyPowerUp(powerUp.type);

                  // 移除道具
                  powerUps.splice(i, 1);
              }
          }

          // 检查经验值是否足够升级
          if (player.exp >= player.expNeeded) {
              levelUp();
          }
      }

      // 检查碰撞
      function checkCollision(obj1, obj2, sizeMultiplier = 1) {
          return obj1.x < obj2.x + obj2.width &&
              obj1.x + obj1.width * sizeMultiplier > obj2.x &&
              obj1.y < obj2.y + obj2.height &&
              obj1.y + obj1.height * sizeMultiplier > obj2.y;
      }

      // 生成道具
      function spawnPowerUp(x, y, isMiniBoss) {
          const types = ['fireRate', 'bulletPower', 'multiShot', 'sizeUp'];
          let type;

          if (isMiniBoss) {
              // 小BOSS掉落更好的道具
              const bossTypes = ['superFireRate', 'superBulletPower', 'tripleShot', 'giantSize'];
              type = bossTypes[Math.floor(Math.random() * bossTypes.length)];
          } else {
              type = types[Math.floor(Math.random() * types.length)];
          }

          powerUps.push({
              x: x - 15,
              y: y - 15,
              width: 30,
              height: 30,
              type: type,
              color: getPowerUpColor(type)
          });
      }

      // 获取道具颜色
      function getPowerUpColor(type) {
          switch (type) {
              case 'fireRate':
                  return '#FFD700'; // 金色
              case 'superFireRate':
                  return '#FFA500'; // 橙色
              case 'bulletPower':
                  return '#FF0000'; // 红色
              case 'superBulletPower':
                  return '#8B0000'; // 深红色
              case 'multiShot':
                  return '#00FF00'; // 绿色
              case 'tripleShot':
                  return '#008000'; // 深绿色
              case 'sizeUp':
                  return '#ADD8E6'; // 浅蓝色
              case 'giantSize':
                  return '#0000FF'; // 蓝色
              default:
                  return '#FFFFFF'; // 白色
          }
      }

      // 应用道具效果
      function applyPowerUp(type) {
          player.isPoweredUp = true;
          player.powerUpType = type;
          player.powerUpEndTime = Date.now() + POWERUP_DURATION;

          switch (type) {
              case 'fireRate':
                  player.fireRate = 150; // 射击速度提高
                  break;
              case 'superFireRate':
                  player.fireRate = 75; // 超级射击速度
                  break;
              case 'bulletPower':
                  player.bulletPower = 2; // 子弹威力提高
                  break;
              case 'superBulletPower':
                  player.bulletPower = 4; // 超级子弹威力
                  break;
              case 'multiShot':
                  player.multiShot = 2; // 双发子弹
                  break;
              case 'tripleShot':
                  player.multiShot = 3; // 三发子弹
                  break;
              case 'sizeUp':
                  player.sizeMultiplier = 1.5; // 变大
                  break;
              case 'giantSize':
                  player.sizeMultiplier = 2; // 巨大化
                  break;
          }
      }

      // 创建爆炸效果
      function createExplosion(x, y, size) {
          explosions.push({
              x: x,
              y: y,
              size: size,
              timer: 20
          });
      }

      // 检查关卡进度
      // 修正后的 checkStageProgress 函数
      function checkStageProgress() {
          // 每关需要击败的敌人数量
          const enemiesPerStage = 20 + stage * 5;

          // 计算当前关卡已击败的敌人数量
          // 这里需要跟踪总击败数，而不是用 enemies.length 来计算
          if (enemiesDefeatedThisStage >= enemiesPerStage && enemies.length === 0 && !bossActive) {
              stage++;
              enemiesDefeatedThisStage = 0; // 重置当前关卡击败数
              updateHUD();

              // 只在第5关(或5的倍数关)出现最终BOSS
              if (stage % 5 === 0) {
                  spawnBoss();
              }
          }
      }

      // 升级
      function levelUp() {
          player.level++;
          player.exp -= player.expNeeded;
          player.expNeeded = Math.floor(player.expNeeded * 1.5);
          updateHUD();

          // 暂停游戏让玩家选择升级
          gameRunning = false;
          document.getElementById('levelUpScreen').style.display = 'flex';
      }

      // 应用等级提升
      function applyLevelUp(type) {
          switch (type) {
              case 'fireRate':
                  player.fireRate = Math.max(100, player.fireRate - 50);
                  break;
              case 'bulletPower':
                  player.bulletPower++;
                  break;
              case 'multiShot':
                  player.multiShot = Math.min(3, player.multiShot + 1);
                  break;
          }
      }

      // 更新HUD
      function updateHUD() {
          document.getElementById('lives').textContent = player.lives;
          document.getElementById('score').textContent = player.score;
          document.getElementById('level').textContent = player.level;
          document.getElementById('exp').textContent = player.exp;
          document.getElementById('expNeeded').textContent = player.expNeeded;
          document.getElementById('stage').textContent = stage;
      }

      // 更新BOSS生命值显示
      function updateBossHealth() {
          if (boss) {
              document.getElementById('bossHealth').textContent = boss.health;
          }
      }

      // 绘制游戏
      function draw() {
          // 绘制背景
          drawBackground();

          // 绘制子弹
          drawBullets();

          // 绘制BOSS子弹
          drawBossBullets();

          // 绘制敌人
          drawEnemies();

          // 绘制BOSS
          drawBoss();

          // 绘制道具
          drawPowerUps();

          // 绘制爆炸效果
          drawExplosions();

          // 绘制玩家
          drawPlayer();

          // 绘制HUD
          drawHUD();
      }

      // 绘制背景
      function drawBackground() {
          // 渐变背景
          const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
          gradient.addColorStop(0, '#000033');
          gradient.addColorStop(1, '#000011');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

          // 星星
          ctx.fillStyle = 'white';
          for (let i = 0; i < 100; i++) {
              const x = Math.random() * CANVAS_WIDTH;
              const y = (Math.random() * CANVAS_HEIGHT + Date.now() / 100) % CANVAS_HEIGHT;
              const size = Math.random() * 2;
              ctx.fillRect(x, y, size, size);
          }
      }

      // 绘制子弹
      function drawBullets() {
          ctx.fillStyle = '#FFFF00';
          bullets.forEach(bullet => {
              ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
          });
      }

      // 绘制BOSS子弹
      function drawBossBullets() {
          bossBullets.forEach(bullet => {
              ctx.fillStyle = bullet.color;
              ctx.beginPath();
              ctx.arc(bullet.x + bullet.width / 2, bullet.y + bullet.height / 2, bullet.width / 2, 0, Math.PI * 2);
              ctx.fill();
          });
      }

      // 绘制敌人
      function drawEnemies() {
          enemies.forEach(enemy => {
              // 绘制敌人
              ctx.fillStyle = enemy.color;
              ctx.beginPath();
              ctx.moveTo(enemy.x + enemy.width / 2, enemy.y);
              ctx.lineTo(enemy.x + enemy.width, enemy.y + enemy.height);
              ctx.lineTo(enemy.x, enemy.y + enemy.height);
              ctx.closePath();
              ctx.fill();

              // 如果是小BOSS，绘制生命条
              if (enemy.isMiniBoss) {
                  const healthBarWidth = enemy.width;
                  const healthBarHeight = 5;
                  const healthPercentage = enemy.health / enemy.maxHealth;

                  ctx.fillStyle = 'red';
                  ctx.fillRect(enemy.x, enemy.y - 10, healthBarWidth, healthBarHeight);

                  ctx.fillStyle = 'green';
                  ctx.fillRect(enemy.x, enemy.y - 10, healthBarWidth * healthPercentage, healthBarHeight);
              }
          });
      }

      // 绘制BOSS
      function drawBoss() {
          if (!boss) return;

          // 绘制BOSS
          ctx.fillStyle = boss.color;
          ctx.beginPath();
          ctx.arc(boss.x + boss.width / 2, boss.y + boss.height / 2, boss.width / 2, 0, Math.PI * 2);
          ctx.fill();

          // 绘制BOSS眼睛
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(boss.x + boss.width / 3, boss.y + boss.height / 3, boss.width / 10, 0, Math.PI * 2);
          ctx.arc(boss.x + boss.width * 2 / 3, boss.y + boss.height / 3, boss.width / 10, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'black';
          ctx.beginPath();
          ctx.arc(boss.x + boss.width / 3, boss.y + boss.height / 3, boss.width / 20, 0, Math.PI * 2);
          ctx.arc(boss.x + boss.width * 2 / 3, boss.y + boss.height / 3, boss.width / 20, 0, Math.PI * 2);
          ctx.fill();

          // 绘制BOSS嘴巴
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(boss.x + boss.width / 2, boss.y + boss.height * 2 / 3, boss.width / 4, 0, Math.PI);
          ctx.stroke();

          // 绘制BOSS生命条
          const healthBarWidth = boss.width;
          const healthBarHeight = 10;
          const healthPercentage = boss.health / boss.maxHealth;

          ctx.fillStyle = 'red';
          ctx.fillRect(boss.x, boss.y - 20, healthBarWidth, healthBarHeight);

          ctx.fillStyle = 'green';
          ctx.fillRect(boss.x, boss.y - 20, healthBarWidth * healthPercentage, healthBarHeight);
      }

      // 绘制道具
      function drawPowerUps() {
          powerUps.forEach(powerUp => {
              ctx.fillStyle = powerUp.color;
              ctx.beginPath();
              ctx.arc(powerUp.x + powerUp.width / 2, powerUp.y + powerUp.height / 2, powerUp.width / 2, 0, Math.PI * 2);
              ctx.fill();

              // 绘制道具图标
              ctx.fillStyle = 'white';
              ctx.font = '16px Arial';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              let symbol = '';
              switch (powerUp.type) {
                  case 'fireRate':
                  case 'superFireRate':
                      symbol = '⚡';
                      break;
                  case 'bulletPower':
                  case 'superBulletPower':
                      symbol = '💥';
                      break;
                  case 'multiShot':
                  case 'tripleShot':
                      symbol = '🔫';
                      break;
                  case 'sizeUp':
                  case 'giantSize':
                      symbol = '🔶';
                      break;
              }

              ctx.fillText(symbol, powerUp.x + powerUp.width / 2, powerUp.y + powerUp.height / 2);
          });
      }

      // 绘制爆炸效果
      function drawExplosions() {
          explosions.forEach(explosion => {
              const radius = explosion.size * (1 - explosion.timer / 20);
              const gradient = ctx.createRadialGradient(
                  explosion.x, explosion.y, 0,
                  explosion.x, explosion.y, radius
              );
              gradient.addColorStop(0, 'yellow');
              gradient.addColorStop(0.5, 'orange');
              gradient.addColorStop(1, 'red');

              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(explosion.x, explosion.y, radius, 0, Math.PI * 2);
              ctx.fill();
          });
      }

      // 绘制玩家
      function drawPlayer() {
          const sizeMultiplier = player.sizeMultiplier;
          const width = player.width * sizeMultiplier;
          const height = player.height * sizeMultiplier;

          // 绘制玩家飞机
          if (player.invulnerable) {
              // 无敌状态闪烁效果
              if (Math.floor(Date.now() / 100) % 2 === 0) {
                  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
              } else {
                  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
              }
          } else {
              ctx.fillStyle = player.isPoweredUp ? '#00FFFF' : '#00FF00';
          }

          ctx.beginPath();
          ctx.moveTo(player.x + width / 2, player.y);
          ctx.lineTo(player.x + width, player.y + height);
          ctx.lineTo(player.x + width / 2, player.y + height * 0.7);
          ctx.lineTo(player.x, player.y + height);
          ctx.closePath();
          ctx.fill();

          // 绘制引擎火焰
          ctx.fillStyle = 'orange';
          ctx.beginPath();
          ctx.moveTo(player.x + width / 2 - width * 0.1, player.y + height * 0.7);
          ctx.lineTo(player.x + width / 2 + width * 0.1, player.y + height * 0.7);
          ctx.lineTo(player.x + width / 2, player.y + height);
          ctx.closePath();
          ctx.fill();
      }

      // 绘制HUD
      function drawHUD() {
          // 绘制道具剩余时间
          if (player.isPoweredUp) {
              const remainingTime = (player.powerUpEndTime - Date.now()) / 1000;
              if (remainingTime > 0) {
                  ctx.fillStyle = 'white';
                  ctx.font = '14px Arial';
                  ctx.textAlign = 'left';
                  ctx.textBaseline = 'top';
                  ctx.fillText(道具剩余: ${remainingTime.toFixed(1)}s, 10, CANVAS_HEIGHT - 30);

                  // 绘制道具图标
                  ctx.font = '20px Arial';
                  let symbol = '';
                  switch (player.powerUpType) {
                      case 'fireRate':
                      case 'superFireRate':
                          symbol = '⚡';
                          break;
                      case 'bulletPower':
                      case 'superBulletPower':
                          symbol = '💥';
                          break;
                      case 'multiShot':
                      case 'tripleShot':
                          symbol = '🔫';
                          break;
                      case 'sizeUp':
                      case 'giantSize':
                          symbol = '🔶';
                          break;
                  }
                  ctx.fillText(symbol, 10, CANVAS_HEIGHT - 60);
              }
          }
      }

      // 绘制开始屏幕
      function drawStartScreen() {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
          ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

          ctx.fillStyle = 'white';
          ctx.font = '30px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('飞机大战', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 100);

          ctx.font = '16px Arial';
          ctx.fillText('使用方向键移动，空格键射击', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40);
          ctx.fillText('击败敌人获得经验升级', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 10);
          ctx.fillText('收集道具增强能力', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);
          ctx.fillText('最终击败BOSS赢得胜利!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
      }

      // 键盘事件处理
      function handleKeyDown(e) {
          keys[e.key] = true;
      }

      function handleKeyUp(e) {
          keys[e.key] = false;
      }

      // 初始化游戏
      window.onload = init;
    </script>
  </body>
</html>
```
