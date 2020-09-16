const Promise = require('bluebird');
const childProc = require('child_process');
const childProcesses = 1000;
let ids = require('./IDs.json');
ids = JSON.parse(ids);

(() => {
  console.time();
  let times = [];
  let children = [];

  for (let i = 0; i < childProcesses; i++) {
    let child = childProc.spawn('node', ['utils/stress.js', `--url=http://localhost:3002/?=${ids[i].itemId}`]);
    children.push(child);
  }

  let responses = children.map((child) => {
    return new Promise((res) => {
      child.stdout.on('data', (data) => {
        times.push(parseInt(data));
      });
      child.on('exit', (code) => {
        code === 0 ? res(true) : res(false);
      });
    });
  });

  Promise.all(responses).then((resolvedResponses) => {
    if (resolvedResponses.filter(Boolean).length === responses.length) {
      const avg = Math.floor(times.reduce((a, b) => a + b, 0) / (times.length || 1));
      console.log(`avg res time: ${avg}`);
      console.log('processes complete');
      console.timeEnd();
    } else {
      console.log('failures during processes');
    }
  });
})();
