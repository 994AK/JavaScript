//要求输入低于10位的数字，输出这串数字
function foo() {
    var num  = window.prompt('input')
    //一位元，三位百，四位千，五位万
    //壹（壹）、贰（贰）、叁、肆（肆）、伍（伍）、陆（陆）、柒、捌、玖、拾
    let str = '';
    for(var i = num.length-1; i >= 0; i++){
         str += RMB[i];
    }

}

function RMB(target){
    let RMB = ['壹','贰','叁','肆','伍','陆','柒','捌','玖','拾'];
    switch (target) {
        case 1 :
            return RMB[0]
        case 2 :
            return RMB[1]
        case 3 :
            return  RMB[2]
        case 4 :
            return  RMB[3]
        case 5 :
            return  RMB[4]
        case 6 :
            return  RMB[5]
        case 7 :
            return  RMB[3]
        case 8 :
            return  RMB[3]
        case 9 :
            return  RMB[3]
    }

}
foo()