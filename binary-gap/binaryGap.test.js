const { findBinaryGap } = require('./binaryGap')

test('find - 101001000', () => {
    const result = findBinaryGap(328)
    expect(result).toBe(2)
})

test('find - 10100', () => {
    const result = findBinaryGap(20)
    expect(result).toBe(1)
})

test('find - 10000010001', () => {
    const result = findBinaryGap(1041)
    expect(result).toBe(5)
})
