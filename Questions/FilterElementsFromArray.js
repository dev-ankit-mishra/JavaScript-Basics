//Problem Link-https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const a=[]
    for(let i=0;i<arr.length;i++){
        let isTrue=fn(arr[i],i)
        isTrue && a.push(arr[i])
    }
    return a;
};