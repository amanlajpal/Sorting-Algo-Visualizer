array=[9,4,2,1,5,6,7]
array.push(Math.floor(Math.random()*5))

function bubbleSort(array,len){
    let temp=0;
    let isSorted=0;
    for(let i=0;i<len;i++){
        isSorted=1;
        for (let j=0;j<len-i;j++){
            if(array[j]>array[j+1]){
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                isSorted=0;
            }
        }
        if(isSorted){
            return array
        }
    }
    return array
}

console.log(bubbleSort(array,array.length))