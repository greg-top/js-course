const btn = document.querySelector('button');
const div = document.querySelector('div');

const codesArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'w', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const codesGenerator = () => {
    codesArray.forEach((code, index) => {
        console.log(`code: ${code}, index: ${index}`);

    })
}
btn.addEventListener('dblclick', codesGenerator(codesArray));
// btn.addEventListener('click', () => {
//     codesArray.forEach((code, index) => {
//         console.log(`code: ${code}, index: ${index}`);

//     })
// });