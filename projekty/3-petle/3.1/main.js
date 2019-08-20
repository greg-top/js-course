// tutaj rozwiązanie

const btn = document.querySelector("button");
let firstFlag = true;
let fontSize = 10;

const liNodeList = document.querySelectorAll("li");
const liArray = [...liNodeList];

//solution with for loop
btn.addEventListener("click", function () {
    // console.log("test");

    if (firstFlag) {
        for (let i = 0; i < liArray.length; i++) {
            liArray[i].style.display = "list-item";
            liArray[i].style.fontSize = `${fontSize}px`;
        }
        firstFlag = !firstFlag;
    } else {
        fontSize += 1;
        for (let i = 0; i < liArray.length; i++) {
            liArray[i].style.fontSize = `${fontSize}px`;
        }
    }
});

//solution with foreach method
// btn.addEventListener("click", function () {
//     if (firstFlag) {
//         liArray.forEach(function (item) {
//             item.style.display = "list-item";
//             item.style.fontSize = `${fontSize}px`;
//         });
//         firstFlag = !firstFlag;
//     } else {
//         fontSize += 1;
//         liArray.forEach(function (item) {
//             item.style.fontSize = `${fontSize}px`;
//         });
//     }
// });