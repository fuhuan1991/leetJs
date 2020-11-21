/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    const s1 = start.replace(/[X]/g, '');
    const s2 = end.replace(/[X]/g, '');
    if (s1 !== s2) return false;
    let i = 0; 
    let j = 0;
    const n = start.length;
    
    while (i < n && j < n) {
        while (start[i] === 'X' && i < n) i++;
        while (end[j] === 'X' && j < n) j++;
        
        if (i === n && j === n) return true;
        
        if (i < j && start[i] === 'L') return false;
        if (i > j && start[i] === 'R') return false;
        i++;
        j++;
    }
    return true;
};