var mySqrt = function (x) {
    if(x<=1) {
        return x;
    }
    for(let i=0;i<=x;i++) {
        if(i*i===x) {
            return i;
        }
        else if(i*i >x) {
            return i-1;
        } 
    }
};
mySqrt(9);
