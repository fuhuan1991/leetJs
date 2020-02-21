const KMPSearch = (pat, txt) => {

  const M = pat.length;
  const N = txt.length;
  const lps = get_lps(pat, M);

  let i = 0;
  let j = 0;

  while (i < N) {
    if (pat[j] === txt[i]) {
      i++;
      j++;
    }

    if (j === M) {
      console.log(i + ' Match!');
      j = lps[j-1];
    } else if (i < N && pat[j] !== txt[i]){
      if (j === 0) {
        i++
      } else {
        j = lps[j-1];
      }
    }
  }
}

const get_lps = (pat, M) => {
  let len = 0;
  let i = 1;
  const lps = [0];

  while (i < M) {
    if (pat[i] === pat[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = len;
        i++;
      }
    }
  }
  return lps;
}

const txt = 'fuhuanjiafufufuhuanngyiweisadhfgioesgfuhuandksghflawfuhuan ';
const pat = 'fuhuan';

console.log(KMPSearch(pat, txt));
