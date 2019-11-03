
var One_Edit_Distance = function(s, t) {
    if (s.length === t.length) {
      // need to change
      let danger = false;
      for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] !== t[i]) {
          if (danger) {
            return false;
          } else {
            danger = true;
          }
        }
      }
      return true;
    } else {
      if (s.length === t.length - 1) {
        // need to insert
        let it = 0;
        let is = 0;
        let danger = false;
        while (it <= it.length - 1) {
          if (s[is] !== t[it]) {
            if (danger) {
              return false;
            } else {
              danger = true;
              it++;
            }
          }
        }
        return true;
      } else if (s.length === t.length + 1){
        // need to delete
        let it = 0;
        let is = 0;
        let danger = 0;
        while (it <= it.length - 1) {
          if (s[is] !== t[it]) {
            if (danger) {
              return false;
            } else {
              danger = true;
              is++;
            }
          }
        }
        return true;
      } else {
        return false;
      }
    }
  };
  
  
  
  
  console.log(One_Edit_Distance('', 'a'))