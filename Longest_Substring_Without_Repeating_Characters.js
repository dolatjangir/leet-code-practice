// var lengthOfLongestSubstring = function(s) {
//     let result = ""
//     for(i=0;i<s.length-1;i++){
     
        
//     }
//     console.log(result);
//     return result
    
    
// };
// console.log(lengthOfLongestSubstring("ababcb"))

var message ='happy new year';

function Year(year){
    this.message = `This is ${year}`
    this.getYear = function(){
        return this.message;
    }
}
var Happy = new Year(2021);

var year =Happy.getYear;

console.log(year());