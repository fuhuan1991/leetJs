/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const contentMap = new Map;
  
    for (let str of paths) {
      const arr = str.split(' ');
      const dir = arr.shift();
      console.log(dir)
      for (let file of arr) {
        const name = file.slice(0, file.indexOf('('));
        const content = file.slice(file.indexOf('(')+1, file.indexOf(')'));
        console.log(name, content);
        if (contentMap.has(content)) {
          contentMap.get(content).push(dir+'/'+name);
        } else {
          contentMap.set(content, [dir+'/'+name]);
        }
      }
    }
    const r = [];
    contentMap.forEach((item) => {
      r.push(item)
    });
  console.log(r)
    return r;
  };
  findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"])