function dial(num){
let res =[];
var n = num.toString();
var ref =["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
var dict = ["foo","bar","foobar","baz"];

let tempArr =[];
for(let i=0;i<dict.length;i++){
    let tempStr = "";
    for(let j=0;j<dict[i].length;j++){
        tempStr += ref.findIndex((x) => x.includes(dict[i][j]));
    }
    if(n.includes(tempStr))
     tempArr.push(dict[i]);
}
    return tempArr;
}
