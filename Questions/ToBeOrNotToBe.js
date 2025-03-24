//Problem Link-https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const obj={
        toBe : function(input){
            if(input===val){
                return true
            }else{
                throw new Error("Not Equal")
            }},
        notToBe : function(input){
            if(input!==val){
                return true;
            }else{
                throw new Error("Equal")
            }
        }
    }
    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */