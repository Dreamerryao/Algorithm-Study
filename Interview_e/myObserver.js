class Subjector{
    constructor(name,state){
        this.state = state;
        this.name = name;
        this.observers = [];
    }

    attach(observer){
        this.observers.push(observer);
    }
    
    setState(newState){
        if(newState!==this.state)
        this.observers.forEach(o=>o.update(this.state,newState));
        this.state = newState;
    }
}

class observer{
    constructor(name){
        this.name = name;
        this.state = '';
    }

    update(pre,newV){
        console.log(this.name+':'+'state changes from '+pre+' to '+newV);
    }
}


let sub = new Subjector('sub','fail');
let ob1 = new observer('ob1');
let ob2 = new observer('ob2');

sub.attach(ob1);
sub.attach(ob2);

sub.setState('success');