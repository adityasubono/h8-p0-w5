function sorting(arrNumber) {
    for(var i = 0; i < arrNumber.length; i++){
        for(var j = 0; j < arrNumber.length; j++){
            // BUBBLE_SORT_NUMBER
            // membandingkan angka dari index ke 0 hingga terakhir ke kanan.
            if (arrNumber[j] > arrNumber[j+1]) {
                // ketika  j > j+1 maka diurutkan dari kecil ke besar
                // ketika  j < j+1 maka diurutkan dari besar ke kecil
                var tampung = arrNumber[j]

                // ubah j jadi j+1
                arrNumber[j] = arrNumber[j+1]
                // ubah j+1 jadi tampung
                arrNumber[j+1] = tampung
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    if (arrNumber.length == 0) {
        return ''
    }

    var terbesar = arrNumber[arrNumber.length-1];
    var count = 0;
    for(var k = 0; k < arrNumber.length; k++){
        if(arrNumber[k] == terbesar){
            count++
        }
    }
    return 'angka paling besar adalah ' + terbesar + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}


console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''