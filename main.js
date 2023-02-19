const newArray = document.getElementsByClassName("new-array")[0]
const bubbleSortBtn = document.getElementsByClassName("bubble-sort")[0]
const bar = document.getElementsByClassName("bar")
newArray.addEventListener("click", newArrayWrap)
bubbleSortBtn.addEventListener("click", bubbleSort)


function newArrayWrap(){
    createNewArray()
}
function createNewArray(noOfBars=10) {
    deleteChild()
    var array = []
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 370) + 1)
    }
    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`;
        bar.classList.add('bar');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bars = document.querySelector("#bars");
    bars.innerHTML = '';
}

let arraySize = document.querySelector('#arr_sz');

arraySize.addEventListener('input', function(){
    createNewArray(+arraySize.value);
});
let delay=500;
let speed_control=document.querySelector('#speed_control');

speed_control.addEventListener('input',function(){
    delay=520-(+speed_control.value)
})

async function bubbleSort() {
    const array = []
    for (let i = 0; i < bar.length; i++) {
        let hgt = +bar[i].style.height.split('px')[0];
        array.push(hgt)
    }
    len = array.length
    let temp = 0;
    let pass=0
    for (let i = 0; i < len - 1; i++) {
        pass++
        console.log(pass)
        for (let j = 0; j < len - i - 1; j++) {
            bar[j].style.backgroundColor = "#ff8800"
            bar[j + 1].style.backgroundColor = "#ff8800"
            await waitforme(delay)
            if (array[j] > array[j + 1]) {
                swapHeight(j)
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;  
            }
            bar[j].style.backgroundColor = "#0077B6"
            bar[j + 1].style.backgroundColor = "#0077B6"
        }
        bar[len - i - 1].style.backgroundColor = "green"
    }

    bar[0].style.backgroundColor="green"
}

function swapHeight(j) {
    temp = document.getElementsByClassName(`barNo${j}`)[0].style.height;
    document.getElementsByClassName(`barNo${j}`)[0].style.height = document.getElementsByClassName(`barNo${j + 1}`)[0].style.height;
    document.getElementsByClassName(`barNo${j + 1}`)[0].style.height = temp;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    }, )
}