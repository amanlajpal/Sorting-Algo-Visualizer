const newArry=document.getElementsByClassName("btn")[0]
newArry.addEventListener("click",createNewArray)

function createNewArray(){
    let array=[]
    for(let i=0;i<60;i++){
        array.push(Math.floor(Math.random()*250)+1)
    }
    console.log(array,array.length);
}