// 10 20 20 10 10 30 50 10 20
// 10 10 10 10 20 20 20 30 50
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let count = 0;

    ar.sort((a, b) => a - b);
    for (let i = 0; i < ar.length; i++) {
        if(ar[i] == ar[i + 1]){
            // Encontre un par
            count++;
            i++;
        }
    }
    return count;
}

console.log(sockMerchant(9, [20,10,20,10,10,30,50,10,20]));

//sockMerchant(9, [1,2,2,1,1,3,5,10,20]);
