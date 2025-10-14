function calculate(callback){
    callback(b,c)
}
calculate((e,f)=>console.log(e+f))
//javascript es6 which came in 2016 included 
//some features like promises ,async await,arrow
// function and so on







//callback hell
calculate((b,c)=>{
    function((d,e)=>{
        console.log(d+e)
        function((f,g)=>{
            console.log(f+g)
        })
    })
})