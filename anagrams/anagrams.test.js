const { anagrams } = require('./anagrams')

test('find which words in an array are anagrams', () => {
    const result = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])
    expect(result).toStrictEqual(["aabb", "bbaa"])
})