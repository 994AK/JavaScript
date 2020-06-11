function mul(n) {
    //到1了后就返回，不然死循环;
    if (n === 1) {
        //出口
        return  1;
    }

    //规律
    return n * mul(n - 1);
}

// mul(3);
// mul(3) ==> 3 * mul(2);
// mul(2) ==> 2 * mul(1);
// mul(1) ==> 1 * mul(0);
// mul(1) ==> 1 * mul(0);
// ...所有要写判断语句
