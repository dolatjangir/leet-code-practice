const climbStairs = function (n) {
if (n === 1){
    return 1;
}

const cs = new Array(n+1).fill(0);
cs[0] = 1;
cs[1] = 1;

for(i=2; i<=n; i++){
    cs[i] = cs[i-1] + cs[i-2]

}
return cs[n];

}
console.log(climbStairs(5));