
// 1 2 3 4 5
// Min = 10
// Max = 14
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = 0;
    let max = 0;

    arr.sort();

    for (let i = 0; i < arr.length-1; i++) {
        min += arr[i];        
        max += arr[i+1];
    }
    
    console.log(min + ' ' + max );
}

miniMaxSum([3,2,1,5,4]);