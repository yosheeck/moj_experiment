const express = require('express')
const expressApp = express()
const { serverLog } = require('./utils')
const { WordListManager } = require('./wordlist')

serverLog('Starting...')

// Load the data
const wordListManager = new WordListManager()
wordListManager.load()

// Start express server
expressApp.get('/:inWords', (req, res) => {
    const inWords = req.params.inWords

    // parse input
    const inWordsList = inWords.split(',')
    res.send('x')

    //
    inWordsList.forEach((word) => {
        serverLog(wordListManager.getAnagrams(word))
    });
})

const port = 3000
const server = expressApp.listen(port, () => {
    serverLog('Server ONLINE at port ' + port)
})