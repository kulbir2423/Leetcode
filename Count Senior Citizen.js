let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
let count=0;
var countSeniors = function (details) {
    for(let i=0;i<details.length;i++) {
        let ageStr = details[i].substring(11,13);
        let age=parseInt(ageStr);
        if(age>60) {
            count++;
        }
    }
    return count;
};
countSeniors(details);

