const { WordListManager } = require('../src/wordlist')
require('should')

suite('WordList anagramWordHash() tests', () => {
    test('Simple cases', () => {
        WordListManager.anagramWordHash('aaa').should.be.eql('aaa')
        WordListManager.anagramWordHash('abc').should.be.eql('abc')
        WordListManager.anagramWordHash('cba').should.be.eql('abc')
    })

    test('multi-letter cases', () => {
        WordListManager.anagramWordHash('aaa').should.be.eql('aaa')
        WordListManager.anagramWordHash('abac').should.be.eql('aabc')
        WordListManager.anagramWordHash('cabazaba').should.be.eql('aaaabbcz')
    })

    test('non-alpha', () => {
        WordListManager.anagramWordHash("aa's").should.be.eql("'aas")
        WordListManager.anagramWordHash("aa's'ed").should.be.eql("''aades")
    })
})
