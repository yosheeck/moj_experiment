const { serverLog } = require('./utils')
const fs = require('fs')

// There is so many ways of doing that: functional, singleton, manager-style...
// Please don't assume anything about my style because I used a class ;)
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
        // create 'hash' based map of words, in a way that both 'cuprites' and 'pictures' create the same hash,
        // so we end up having nice hashmap to anagrams
        wordsList.forEach( (word) => {
            const hash = WordListManager.anagramWordHash(word)
            if (this.wordsDb[hash]) {
                this.wordsDb[hash].push(word)
            } else {
                this.wordsDb[hash] = [word]
            }
        })
    }

    getAnagrams(inWord) {
        const hash = WordListManager.anagramWordHash(inWord)
        const dbEntry = this.wordsDb[hash]

        if (dbEntry) {
            // make a copy of anagrams array from DB
            const allAnagrams = dbEntry.slice(0)

            // remove the inWord from the array
            allAnagrams.splice(allAnagrams.indexOf(inWord), 1)
            return allAnagrams
        } else {
            return []
        }
    }

    static anagramWordHash(word) {
        const charArray = word.split('')
        const charArraySorted = charArray.sort()
        const wordHash = charArraySorted.join('')
        return wordHash
    }
}

exports.WordListManager = WordListManager
