
## 实现以一个 lazyMan 类,他具有 sleep 和 sleepFist 和 eat方法
eat 输出正在吃 xx
sleep 输出睡了 xxx s
sleepFist 输出 首先睡了 xxx s



let joe = new LazyMan('joe')
joe.eat('apple')
    .eat('bananan')
    .sleepFisrt(10)
    .eat('orange')
    .sleep(20)
    .eat("pear")
 // 应该 等待 10s 输出 apple bananan  orange 等待 20s pear



```js

class LazyMan {
      constructor() {
        this.tasks = []
        setTimeout(() => {
          this.run()
        }, 0)
      }

      sleep(time) {
        this.tasks.push(() => {
          setTimeout(() => {
            console.log(`sleep ${time}`)
            this.run()
          }, time * 1000)
        })

        return this
      }

      sleepFirst(time) {
        this.tasks.unshift(() => {
          setTimeout(() => {
            console.log('slep first')
            this.run()
          }, time * 1000)
        })

        return this
      }

      eat(food) {
        this.tasks.push(() => {
          console.log(`eat fruit is${food}`)
          this.run()
        })

        return this
      }

      run() {
        let task = this.tasks?.shift();
        if (task) {
          task()
        }
      }
    }

    let lazyman = new LazyMan('tony')
        lazyman.eat('apple')
                .eat('banana')
                .sleepFirst(10)
                .eat("orange")
                .sleep(5)
                .eat("pear")



```