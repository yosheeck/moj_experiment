const express = require('express')
const expressApp = express()
const { serverLog } = require('./utils')
const { WordListManager } = require('./wordlist')
const runTests = true

serverLog('Starting...')

// Load the data
const wordListManager = new WordListManager()
wordListManager.load()

// Start express server
expressApp.get('/:inWords', (req, res) => {
    const inWords = req.params.inWords

    // parse input
    const inWordsList = inWords.split(',')

    // build the response
    const response = {}
    inWordsList.forEach((word) => {
        response[word] = wordListManager.getAnagrams(word)
    });
    res.send(JSON.stringify(response))
})

const port = 3000
const server = expressApp.listen(port, () => {
    serverLog('Server ONLINE at port ' + port)

    if (runTests) {
        serverLog('Running auto-tests with mocha...')
        require('../tests/index.js')
    }
})

