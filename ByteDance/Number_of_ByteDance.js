function f(str) {

    let result = 0;

    const counter = {
        b: 0,
        y: 0,
        t: 0,
        e: 0,
        d: 0,
        a: 0,
        n: 0,
        c: 0,
    };
    
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (counter[str[i]] !== undefined) {
            counter[str[i]]++;
        }
    }

    while (counter.b >= 1 && counter.y >= 1 && counter.t >= 1 && counter.e >= 2 && counter.d >= 1 &&
           counter.a >= 1 && counter.n >= 1 && counter.c >= 1) {
            result++;
            counter.b --;
            counter.y --;
            counter.t --;
            counter.e --;
            counter.d --;
            counter.a --;
            counter.n --;
            counter.c --;
            counter.e --;
    }
    return result;
}

console.log(f('bytedanwwwwwwercebytexxxcvdance'))