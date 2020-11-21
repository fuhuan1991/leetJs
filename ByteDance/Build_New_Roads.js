function f (input) {
    const inputArr = input.split('\n');
    const N = inputArr[0].split(' ')[0];
    const M = inputArr[0].split(' ')[1];
    const leaderMap = {};
    const componentMap = {};

    for (let i = 0; i < N; i++) {
        leaderMap[i] = i;
        componentMap[i] = [i];
    }

    for (let i = 1; i <= M; i++) {
        const t1 = inputArr[i].split(' ')[0];
        const t2 = inputArr[i].split(' ')[1];
        const leader1 = leaderMap[t1];
        const leader2 = leaderMap[t2];

        if (leader1 !== leader2) {
            componentMap[leader1].splice(0, 0, ...componentMap[leader2]);
            for (let member of componentMap[leader2]) {
                leaderMap[member] = leaderMap[leader1]
            }
            delete componentMap[leader2];
        }
    }

    console.log(componentMap);
    console.log(leaderMap);
    let result = 0;
    for (let leader in componentMap) {
        result++;
    }
    console.log(result-1);
    return result-1;
}

f('10 8\n0 1\n1 2\n2 3\n4 6\n6 5\n4 5\n7 8\n8 9');