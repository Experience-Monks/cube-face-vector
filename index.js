module.exports = cubeFaceVector
function cubeFaceVector (slot) {
  switch (slot) {
    case 0: return [ 1, 0, 0 ]
    case 1: return [ -1, 0, 0 ]
    case 2: return [ 0, 1, 0 ]
    case 3: return [ 0, -1, 0 ]
    case 4: return [ 0, 0, 1 ]
    case 5: return [ 0, 0, -1 ]
    default: throw new Error('must specify a slot 0 - 5')
  }
}
