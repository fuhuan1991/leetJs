function deletingSubstrings (s, t) {
    const mem = {};
    const r = f(s, t, mem);
    console.log(r)
  }
  
  function f(s, t, mem) {
    
    if(mem[s]) {
      return mem[s];
    }
    console.log(s,t)
    const firstIndex = s.indexOf(t);
    const lastIndex = s.lastIndexOf(t);
    if (firstIndex > -1) {
      if (firstIndex === lastIndex) {
        const newStr = s.slice(0, firstIndex).concat(s.slice(firstIndex + t.length));
        const r = f(newStr, t, mem) + 1;
        mem[s] = r;
        return r;
      } else {
        const newStr1 = s.slice(0, firstIndex).concat(s.slice(firstIndex + t.length));
        const newStr2 = s.slice(0, lastIndex).concat(s.slice(lastIndex + t.length));
        // console.log('---')
        // console.log(s,t)
        // console.log(newStr1, newStr2)
        const r = Math.max(f(newStr1, t, mem)+1, f(newStr2, t, mem)+1);
        mem[s] = r;
        return r;
      }
    }
    else {
      return 0;
    }
  }
  
  deletingSubstrings('bcbbc', 'b')