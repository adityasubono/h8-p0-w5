function makanTerusRekursif(waktu) {
    var makan = 1;
    // console.log('waktu',waktu ,'===',0);
    // console.log('waktu',waktu,'<= 15');
    // console.log(waktu <= 15)
    if(waktu  == 0){
       // console.log('waktu',waktu ,'===',0);

        return 0

    } else if (waktu <= 15) {
        // console.log(waktu <= 15);
        // console.log('makan',makan);
        return makan
    }
    //console.log('makan',makanTerusRekursif(waktu - 15)+ makan);
    return makanTerusRekursif(waktu - 15) + makan;

}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0`
