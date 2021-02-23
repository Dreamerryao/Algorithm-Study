function myPromise(fn){
    let state = 'pending'; //state
    let value = null;
    let callbacks = [];

    this.then = function(onFulfilled){
        return new myPromise((resolve,reject)=>{
            handle({
                onFulfilled,
                resolve
            })
        })
    }

    function handle(callback){
        if(state === 'pending'){
            callbacks.push(callback);
        }

        if(state === 'fulfilled'){
            if(!callback.onFulfilled){
                callback.resolve(value)
                return ;
            }
            const ret = callback.onFulfilled(value);
            callback.resolve(ret);
        }
    }

    function resolve(newValue){
        const fn = ()=>{
            if(state!=='pending')return;
            state = 'fulfilled';
            value = newValue;
            handleCb();
        }

        setTimeout(fn,0);
    }

    function handleCb(){
        while(callbacks.length){
            const fulfiledFn = callbacks.shift();
            handle(fulfiledFn);
        }
    }
    fn(resolve);
}