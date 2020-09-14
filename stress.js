'use strict';

const axios = require('axios');
const { config } = require('bluebird');
const argv = require('minimist')(process.argv.slice(2));

(async () => {
  axios.interceptors.request.use(
    (config) => {
      config.metadata = { startTime: new Date() };
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      res.config.metadata.endTime = new Date();
      res.duration = res.config.metadata.endTime - res.config.metadata.startTime;
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axios.get(argv.url)
    .then(res => {
      // console.log('wintown')
      // console.log(res.duration)
      process.stdout.write(res.duration.toString());
      process.exitCode = 0;
    })
    .catch(err => {
      process.exitCode = 1;
    })
})();
