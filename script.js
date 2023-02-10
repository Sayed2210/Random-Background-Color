let hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","E","F"];
let colorArr= [];
for(let i=0 ; i < 6; i++) {
    colorArr.push(hexArr[Math.floor(Math.random()* hexArr.length)]);
}
let bgColor = colorArr.join("");
document.write = bgColor;