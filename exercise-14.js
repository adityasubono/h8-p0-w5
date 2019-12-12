function changeVocals (str) {
    //code di sini
    var outputHuruf = '';
    for(var i = 0; i < str.length; i++){
        switch (str[i]) {
            case 'a': { outputHuruf += 'b'; break;}
            case 'i': { outputHuruf += 'j'; break;}
            case 'u': { outputHuruf += 'v'; break;}
            case 'e': { outputHuruf += 'f'; break;}
            case 'o': { outputHuruf += 'p'; break;}
            case 'A': { outputHuruf += 'B'; break;}
            case 'I': { outputHuruf += 'J'; break;}
            case 'U': { outputHuruf += 'V'; break;}
            case 'E': { outputHuruf += 'F'; break;}
            case 'O': { outputHuruf += 'P'; break;}
            default: { outputHuruf += str[i] ;break;}
        }
    }
    return outputHuruf
}

function reverseWord (str) {
    //code di sini
    var outputHuruf = '';

    for(var i = str.length-1; i >= 0; i--){
        outputHuruf += str[i]
    }
    return outputHuruf
}

function setLowerUpperCase (str) {
    //code di sini
    var outputHuruf = ''
    for(var i = 0; i < str.length; i++){
        if (str[i] == str[i].toLowerCase()) {
            outputHuruf+=str[i].toUpperCase();
        } else {
            outputHuruf+=str[i].toLowerCase();
        }
    }
    return outputHuruf
}

function removeSpaces (str) {
    //code di sini
    var outputHuruf = '';
    for(var i = 0; i < str.length; i++){
        if (str[i] == ' ') {
        } else {
            outputHuruf+=str[i]
        }
    }
    return outputHuruf
}

function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var outChange = changeVocals(name);
    var outReverse = reverseWord(outChange);
    var outSetLower = setLowerUpperCase(outReverse);
    var outRemove = removeSpaces(outSetLower);
    return outRemove;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'