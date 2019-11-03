
var Group_Shifted_String = function(strs) {
    const mem = {};
    for (let i in strs) {
      const t = tag(strs[i]);
      // console.log(t)
      if (mem[t]) {
        mem[t].push(strs[i]);
      } else {
        mem[t] = [strs[i]];
      }
    }
  
    const r = [];
    for (let i in mem) {
      r.push(mem[i]);
    }
  
    return r;
  };
  
  function tag(string) {
    if (string.length === 1) {
      return 'x';
    } else {
      let t = '';
      for (let i = 1; i <= string.length - 1; i++) {
        t = t + (string.charCodeAt(i) - string.charCodeAt(i-1));
      }
      return t
    }
  }
  
  
  
  console.log(Group_Shifted_String(["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"]))