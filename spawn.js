"use strict";
const childProc = require('child_process');
const childProcesses = 200;
const testURL = 'http://localhost:3002/?=116';

(async () => {
  let times = [];
  let children = []

  for (let i = 0; i < childProcesses; i++) {
    let child = childProc.spawn("node", ["stress.js", `--url=${testURL}`])
    children.push(child);
  }

  let responses = children.map(child => {
    return new Promise(res => {
      child.stdout.on('data', data => {
        console.log(`child stdout: ${data}`);
        times.push(parseInt(data));
      });
      child.on('exit', code => {
        code === 0 ? res(true) : res(false);
      })
    })
  })

  responses = await Promise.all(responses);

  if (responses.filter(Boolean).length === responses.length) {
    const sum = times.reduce((a, b) => a + b, 0);
    const avg = (sum / times.length) || 0;
    console.log(`average duration: ${avg}`);
    console.log('processes complete');
  } else {
    console.log('failures during processes');
  }
})()