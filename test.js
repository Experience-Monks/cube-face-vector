var faceVector = require('./')
var test = require('tape')

test('gets a unit vector for a given cubemap side', function (t) {
  t.deepEqual(faceVector(0), [1, 0, 0])
  t.deepEqual(faceVector(1), [-1, 0, 0])
  t.throws(faceVector.bind(null, 6), 'throws err')
  t.end()
})
