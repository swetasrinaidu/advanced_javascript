// currying with bind
function add(a,b){
    return a+b;
}
const addBy5 = add.bind(this,5);
console.log("currying with bind",addBy5(4))

//currying with closure
function sum(a){ 
    return function(b){
        return a+b;
    }
}
console.log("currying with closure",sum(5)(4))