# cube-face-vector

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Gets a unit vector for the specified index into a 3D cube, intended to be used alongside cube map manipulation in OpenGL applications. The order is the same as in DDS and OpenGL, see below.

## Example

```js
var direction = require('cube-face-vector')
var range = require('array-range')

var faces = range(6).map(i => direction(i))
```

Results in:

```
[
  [1,  0, 0],
  [-1, 0, 0],
  [0,  1, 0],
  [0, -1, 0],
  [0,  0, 1],
  [0,  0, -1]
]
```

## Usage

[![NPM](https://nodei.co/npm/cube-face-vector.png)](https://www.npmjs.com/package/cube-face-vector)

#### `vector = direction(slot)`

Returns a unit vector for the given `slot` in a cube map, using the same ordering as OpenGL and various texture formats: `px, nx, py, ny, pz, nz`.

`slot` is between 0 (inclusive) and 6 (exclusive).

## See Also

- [cube-face-name](https://www.npmjs.com/package/cube-face-name)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/cube-face-vector/blob/master/LICENSE.md) for details.
