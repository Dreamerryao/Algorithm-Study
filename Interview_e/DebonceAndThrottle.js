let debounce = function(fn,delay){
    var timer;
    return function(){
        let context = this;
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            fn.apply(context,args);
        },delay);
    }
}

let throttle = function(fn,delay){
    var timer;
    return function(){
        let context = this;
        let args = arguments;
        if(timer){
            return;
        }
        timer = setTimeout(function(){
            fn.apply(context,args);
        },delay);
    }
}

let throttle2 = function(fn,delay){
    var pre = 0;
    return function(){
        let context = this;
        let args = arguments;
        let now = new Date();
        if(now - pre > delay){
            fn.apply(context,args);
            pre = now;
        }
    }
}