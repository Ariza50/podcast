import {duration, trimLabel} from "./format";

test('Function: trimLabel', () => {
  const label = 'The Joe Rogan Experience'
  const trimAt = 22
  const expected = 'The Joe Rogan Experien...'
  expect(trimLabel(label, trimAt)).toBe(expected)
})

test('Function: formatDuration', () => {
  const millis = 1184000
  const expected = '19:44'
  expect(duration(millis)).toBe(expected)
})
