function simpleArraySum(ar) {
    
    // let suma = 0;
    // for (const numero of ar) {
    //     suma += numero;
    // }
    // return suma;

    // return ar.reduce(function(total,actual) {
    //     return total + actual;
    // });

    return ar.reduce((total, actual) => total + actual);
}

console.log(simpleArraySum([1,2,3,4,10,11]));