 const sum=(number)=>{
    console.log("number",number)
    return function(x){
        console.log("x",x)
         if(x===undefined)
          return number;
        return sum(x+number)
    }
}
 console.log(sum(1)(2)(3)(4)());
