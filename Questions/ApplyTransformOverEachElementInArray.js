//Problem Link-https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/1582569338/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const a=[]
    for(let i=0;i<arr.length;i++){
        a.push(fn(arr[i],i))
    }
    return a
};