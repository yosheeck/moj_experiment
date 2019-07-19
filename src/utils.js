require('terminal-colors')
const serverLog = (...args) => {
    console.log(('[SERVER]').lightBlue, ...args);
}

exports.serverLog = serverLog
