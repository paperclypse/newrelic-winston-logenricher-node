'use strict'

const tap = require('tap')
const trucate = require('../../lib/truncate')

tap.test('Should truncate string > 1024 chars', (t) => {
  const longString = 
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111' +
  '1111111111111111111111111111111111111111111111111111111111111111'

  const processedStr = trucate(longString)

  t.equal(processedStr.length, 1024)
  t.equal(processedStr.substring(processedStr.length - 3), '...')

  t.end()
})

tap.test('Should return non-truncated string when <= 1024 chars', (t) => {
  const str = 'kenny loggins'

  const processedStr = trucate(str)

  t.equal(processedStr, str)
  t.end()
})

