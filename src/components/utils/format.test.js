
test('Function: trimLabel', () => {
  const { trimLabel } = require('./format')
  const label = 'The Joe Rogan Experience'
  const trimAt = 22
  const expected = 'The Joe Rogan Experien...'
  expect(trimLabel(label, trimAt)).toBe(expected)
})
