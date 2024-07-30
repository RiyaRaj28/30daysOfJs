//Ques-1
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let value=init
    return{
       increment:function(){
        value=value+1
        return value
    } ,
    
    
        decrement:function(){
        value=value-1
        return value
    
    },
    
        reset:function(){
        value=init
        return value
    
    }}
   
    
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

//Ques-2

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let ans = [];
    arr.forEach((val,value)=>{
        ans.push(fn(val,value));
    })
    return ans;
};