function myIterator(data){
    let currentIndex =0;
    return{
        next: ()=>{
        const done =(currentIndex >= data.length);
        const value =!done ? data[currentIndex] : undefined;
        currentIndex += 1;

            return{
                value ,done
            }
        }
    }
}

const itrObj =myIterator([20,30,40,50]);

console.log(itrObj.next())
console.log(itrObj.next())
console.log(itrObj.next())
console.log(itrObj.next())
console.log(itrObj.next())


/*
In the above code snippet, the myIterator() function returns an object that has a 
next() method, when called each time returns the next value of the collection. After the 
last element, the done value of the object returned becomes true and the value returned 
is always undefined.
*/