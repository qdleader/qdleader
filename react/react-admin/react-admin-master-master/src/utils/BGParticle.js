import {TweenLite,Circ} from "gsap/all";

class BGParticle {
  constructor(id) {
    this.id = id
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.points = []
    this.target = {}
    this.canvas = null
    this.ctx = null
    this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
    this.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame

  }

  createCanvas() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.style.display = 'block'        //防止全屏的canvas出现滚动条
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.canvas.style.position = 'fixed'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
    document.getElementById(this.id).appendChild(this.canvas)
  }

  createPoints() {
    const {width, height} = this
    //创建粒子和粒子的起始位置
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        let px = x + Math.random() * width / 20;
        let py = y + Math.random() * height / 20;
        let p = {x: px, originX: px, y: py, originY: py};
        this.points.push(p);
      }
    }
    //给每个粒子添加新属性closest、radius
    for (let i = 0; i < this.points.length; i++) {
      let closest = [];
      let p1 = this.points[i];
      for (let j = i + 1; j < this.points.length; j++) {
        let p2 = this.points[j]
        let placed = false;
        for (let k = 0; k < 5; k++) {
          if (!placed) {
            if (closest[k] === undefined) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
        for (let k = 0; k < 5; k++) {
          if (!placed) {
            if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      }
      p1.closest = closest;
      p1.radius = 2 + Math.random() * 2
      //给粒子添加抖动
      this.shakePoint(p1);
    }
  }

  shakePoint(point) {
    TweenLite.to(point, 1 + 1 * Math.random(), {
      x: point.originX - 50 + Math.random() * 100,
      y: point.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
      onComplete: () => {
        this.shakePoint(point);
      }
    });
  }

  drawPoint(point, ctx) {
    if (!point.pointActive) return;
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(156,217,249,' + point.pointActive + ')';
    ctx.fill();
  }

  drawLines(point, ctx) {
    if (!point.lineActive) return;
    for (let item of point.closest) {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(item.x, item.y);
      ctx.strokeStyle = 'rgba(156,217,249,' + point.lineActive + ')';
      ctx.stroke();
    }
  }

  getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

  handleResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  handleMouseMove(e) {
    let posx = 0, posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    this.target.x = posx;
    this.target.y = posy;
  }

  init() {
    this.createCanvas()
    this.createPoints()
    this.start()

    window.onresize = (e) => this.handleResize(e)
    window.onmousemove = (e) => this.handleMouseMove(e)
  }

  start() {
    const {width, height, getDistance, points, ctx, target, requestAnimationFrame} = this
    this.ctx.clearRect(0, 0, width, height);

    for (let point of points) {
      if (Math.abs(getDistance(target, point)) < 4000) {
        point.lineActive = 0.3;
        point.pointActive = 0.6;
      } else if (Math.abs(getDistance(target, point)) < 20000) {
        point.lineActive = 0.1;
        point.pointActive = 0.3;
      } else if (Math.abs(getDistance(target, point)) < 40000) {
        point.lineActive = 0.02;
        point.pointActive = 0.1;
      } else {
        point.lineActive = 0;
        point.pointActive = 0;
      }

      this.drawLines(point, ctx)
      this.drawPoint(point, ctx);
    }
    this.myReq = requestAnimationFrame(() => this.start());
  }

  destory() {
    const cancelAnimationFrame = this.cancelAnimationFrame
    cancelAnimationFrame(this.myReq)
    window.onresize = null
    window.onmousemove = null
  }
}
export default BGParticle