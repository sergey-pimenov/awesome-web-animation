const MAX_CONCURRENT = 3;
let active = 0;
const waiting = [];

function pump() {
  while (active < MAX_CONCURRENT && waiting.length > 0) {
    const job = waiting.shift();
    active += 1;
    job();
  }
}

export default function queuedJson(url) {
  return new Promise(resolve => {
    const run = () => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            return null;
          }
          return response.json();
        })
        .then(resolve)
        .catch(() => resolve(null))
        .finally(() => {
          active -= 1;
          pump();
        });
    };

    waiting.push(run);
    pump();
  });
}
