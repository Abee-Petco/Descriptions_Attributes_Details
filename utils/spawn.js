const Promise = require('bluebird');
const childProc = require('child_process');
const childProcesses = 1000;
const testURL = 'http://localhost:3002/?=2974561';

(() => {
  let times = [];
  let children = [];

  for (let i = 0; i < childProcesses; i++) {
    let child = childProc.spawn('node', ['utils/stress.js', `--url=${testURL}`]);
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
      const total = times.reduce((a, b) => a + b, 0);
      console.log(`1k response time: ${total}ms`);
      console.log('processes complete');
    } else {
      console.log('failures during processes');
    }
  });
})();
