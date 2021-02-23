class Queue{
    constructor(){
        this.eventList = [];
    }
    task(wait,fn){
        let tmpObj = {
            wait:wait,
            fn:fn
        };
        this.eventList.push(tmpObj);
        
    }
    start(){
        while(this.eventList.length){
            let obj = this.eventList.shift();
            console.log(obj);
            let timeId  = (function(){setTimeout(obj.fn,obj.wait)})();
        }
    }
}

let queue = new Queue();
queue.task(100, () => { 
        console.log(1) 
    })
queue.task(5000, () => { 
        console.log(2) 
    })
queue.start();