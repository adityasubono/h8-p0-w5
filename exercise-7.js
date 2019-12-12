function hapusSimbol(str) {
    // DENGAN LITERAL
    // var regex = new RegExp(/[a-z0-9]/gi);
    // return str.match(regex).join('')
    //
    // TANPA JOIN
    // var regexS = str.match(/[a-z0-9]+/gi)
    // var output = '';
    // for(var i = 0; i < regexS.length; i++){
    //     output += regexS[i]
    // }
    // return output

    //DENGAN MUDAHNYA astagfirullah :worried:
    return str.match(/[a-z0-9]+/gi).join('')
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
