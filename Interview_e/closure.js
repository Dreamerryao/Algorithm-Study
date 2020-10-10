let num = 3;
for(let i=0;i<num;i++){
    (function(hh){
        setTimeout(
            ()=>console.log("wow"),hh*1000
        )
    })(i)
}

for(let i = 0;i<num;i++){
    setTimeout(()=>console.log("wow"),i*1000);
}