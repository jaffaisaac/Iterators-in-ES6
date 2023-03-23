const numbers = [2,4,6,7];
/*
to make this array iterable, we nees to define a [Symbol.itarator] method on it that returns an iterator object.
Here we can do this using a generator function */

numbers[Symbol.iterator]=function*(){
    for(let i =0; i<this.length; i++){
        yield this[i];
    }
}
/*
in this example,we are defining a generator function as the `[Symobol.iterator]` method.The generator uses the yield keyword to return each element of the array in a for..of loop
*/
for(const num of numbers){
    console.log(num)
}