let index = 10;


const fetch = (page) => {
  console.log('fetch')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(page);
    }, 1000);
  });
}

async function fetchAll() {
  let current = 0;
  const data = [];

  while (current < index) {
    const d = await fetch(current);
    data.push(d);
    console.log(data);
    current++;
  }
}

// fetch().then((res) => { console.log(res) });
fetchAll()