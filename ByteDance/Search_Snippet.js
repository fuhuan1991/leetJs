function f(content, w1, w2) {
    const originalArr = content.split(' ');
    const arr = content.toLowerCase().split(' ');
    w1 = w1.toLowerCase();
    w2 = w2.toLowerCase();
    let p1 = -1;
    let p2 = -1;
    let dis = Infinity;
    let p1_final = -1;
    let p2_final = -1;

    while (p1 < arr.length && p2 < arr.length) {
        if (p1 < p2) {
            p1++;
            while (p1 < arr.length) {
                if (getWord(arr[p1]) === w1) {
                    
                    if (p1 >- 1 && p2 > -1 && dis > Math.abs(p1 - p2)) {
                        // console.log('--', p1, p2)
                        p1_final = p1;
                        p2_final = p2;
                        dis = Math.abs(p1 - p2);
                    }
                    break;
                }
                p1++;
            }
        } else {
            p2++;
            while (p2 < arr.length) {
                if (getWord(arr[p2]) === w2) {
                    
                    if (p1 >- 1 && p2 > -1 && dis > Math.abs(p1 - p2)) {
                        // console.log('--', p1, p2)
                        p1_final = p1;
                        p2_final = p2;
                        dis = Math.abs(p1 - p2);
                    }
                    break;
                }
                p2++;
            }
        }
    }
    let smallerP = Math.min(p1_final, p2_final);
    let biggerP = Math.max(p1_final, p2_final);

    smallerP = Math.max(0, smallerP-3);
    biggerP = Math.min(arr.length-1, biggerP + 3);

    return originalArr.slice(smallerP, biggerP+1).join(' ');
    
}

function getWord(str) {
    if (str[0] <= 'a' || str[0] >= 'z') {
        str = str.slice(1);
    }
    if (str[str.length-1] <= 'a' || str[str.length-1] >= 'z') {
        str = str.slice(0, str.length-1);
    }
    return str;
}

// console.log(f('say hello to the world, Hello World!', 'hello', 'world'))
console.log(f('bytedance also provides powerful serch engineer for billions of people around the world', 'bytedance', 'people'))