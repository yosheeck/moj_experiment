require('should')
const fetch = require('node-fetch')

const mainUrl = 'http://127.0.0.1:3000/'

const getAnagrams = async (inWords) => {
    const result = await fetch(mainUrl + inWords)
    const resultJson = await result.json()
    return resultJson
}

suite('API test', () => {
    test('Case #1 from task defintion', async () => {
        const anagramsReturned = await getAnagrams('crepitus')
        anagramsReturned.should.be.eql({"crepitus":["cuprites","pictures","piecrust"]})
    })

    test('Case #2 from task defintion', async () => {
        const anagramsReturned = await getAnagrams('crepitus,paste,kinship,enlist,boaster,fresher,sinks,knits,sort')
        anagramsReturned.should.be.eql(
            {
                "crepitus":["cuprites","pictures","piecrust"],
                "paste":["pates","peats","septa","spate","tapes","tepas"],
                "kinship":["pinkish"],
                "enlist":["elints","inlets","listen","silent","tinsel"],
                "boaster":["boaters","borates","rebatos","sorbate"],
                "fresher":["refresh"],
                "sinks":["skins"],
                "knits":["skint","stink","tinks"],
                "sort":["orts","rots","stor","tors"]
            }
        )
    })

    test('Case #3 from task defintion', async () => {
        const anagramsReturned = await getAnagrams('sdfwehrtgegfg')
        anagramsReturned.should.be.eql({"sdfwehrtgegfg":[]})
    })
})
