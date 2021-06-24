function adding(a, b) {
    return a + b
}

test('Adding 2 numbers', () => {
    expect(adding(4, 5)).toBe(9)
})