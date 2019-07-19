const { serverLog } = require('./utils')
const fs = require('fs')

// There is so many ways of doing that, functional, singleton, manager-style...
// Please don't assume anything about my style because I used class ;)
class WordListManager {
    constructor () {
        this.wordsDb = {}
    }

    load() {
        // Load plain file
        serverLog('Loading wordlist...')
        const wordsList = fs.readFileSync(__dirname + '/../data/wordlist.txt').toString().split("\r\n")
        serverLog(`Loaded wordlist. Got ${wordsList.length} words. Processing...`)

        // Process
        // this.wordsDb =
    }

    getAnagrams() {
        return 'cool'
    }
}

exports.WordListManager = WordListManager
