function kaliTerusRekursif(angka) {
    var string = angka.toString();

    if (string.length == 1) {
        return angka
    } else {
        var temp = 1
        for(var i = 0; i < string.length; i++){
            console.log(string[i]);
            temp*=string[i]
        }
        return kaliTerusRekursif(temp)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
