 /**
* 题目: JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
* 条件: 只能修改Sheduler
**/

```
    class Scheduler {
        constructor() {
            this.cache = [] // 缓存任务数据
            this.task = [] // 当前执行任务队列
            this._max = 2 // 最大并发任务
        }
        add(promiseCreator) {
            return new Promise(resolve => {
                promiseCreator.resolve = resolve; // 保存当前promise的状态
                if (this.task.length < this._max) { // 最大并发任务处理
                    this.runWork(promiseCreator)
                } else {
                    this.cache.push(promiseCreator)
                }
            })
        }
        runWork(promiseCreator) {
            this.task.push(promiseCreator)
            promiseCreator().then(() => {
                promiseCreator.resolve()
                this.task.splice(this.task.indexOf(promiseCreator), 1) // 当前任务执行完成 清除task中的数据
                if (this.cache.length) {
                    this.runWork(this.cache.shift()) // 根据执行的缓存顺序执行，保证执行的有序性
                }
            })
        }
    }
    const timeout = (time) => new Promise(resolve => {
            setTimeout(resolve, time)
    })

const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => {
        console.log(order);
    })
}

addTask(4000,'1')
addTask(3500,'2')
addTask(4000,'3')
addTask(3000,'4')

```
//Scheduler ？
//4秒后打印1
//3.5秒打印2
//3进入队列，到7.5秒打印3 
//...