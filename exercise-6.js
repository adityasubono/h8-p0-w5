function SplitLogic(data, separator) {
    var strBaru = [];
    var tempSementara = ''
    for(var i = 0; i < data.length; i++){
        if (data[i] == separator) {
            strBaru.push(tempSementara)
            tempSementara = ''
        } else {
            tempSementara += data[i]
        }
    }
    strBaru.push(tempSementara)
    return strBaru
}

function kelompokin(data, check) {
    var ranged = []
    var melee = []
    var output = []
    for(var l = 0; l < data.length; l++){
        if (data[l][1] == 'Ranged') {
            ranged.push(data[l][0])
        } else if (data[l][1] == 'Melee'){
            melee.push(data[l][0])
        }
    }

    if (check.length == 0) {
        return output
    } else {
        output.push(ranged,melee)
        return output
    }
}

function meleeRangedGrouping(str) {
    var SplitSatu = SplitLogic(str, ',')

    var strBaru2 = []
    for(var i = 0 ; i < SplitSatu.length; i++){
        var strNew = SplitLogic(SplitSatu[i], '-')
        strBaru2.push(strNew)
    }
    var KelompokinDund = kelompokin(strBaru2, str)
    return KelompokinDund
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []