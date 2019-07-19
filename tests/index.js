require('should')
Mocha = require('mocha')
mocha = new Mocha({ui: 'tdd', reporter: 'spec', bail: 'yes'})

mocha.addFile('tests/wordlist.js')
mocha.addFile('tests/api.js')

mocha.run()