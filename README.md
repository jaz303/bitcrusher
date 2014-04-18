# bitcrusher

Implementation of a bit-crush effect using the Web Audio API.

## Installation

Use browserify!

    $ npm install bitcrusher

## Usage

```javascript
var bitcrusher = require('bitcrusher');

var audioContext = window.createAudioContext();

var bitcrushNode = bitcrush(audioContext, {
    bitDepth: 6,
    frequency: 0.5
});

var mySource = // ... create audio source

mySource.connect(bitcrushNode);
bitcrushNode.connect(audioContext.destination);
```

## API

#### `bitcrusher(audioContext, opts)`

Create a new bitcrusher in the Web Audio Context `audioContext` configured with the supplied options:

  * `bufferSize`: defaults to 4096
  * `channelCount`: defaults to 2
  * `bitDepth`: output resolution, defaults to 8
  * `frequency`: sample-and-hold ratio; used to reduce the perceived output frequency. Defaults to 1 (no change).

Returns a `ScriptProcessorNode` configured with a bitcrush effect.

## Reference

If you're running OS X, open `graph.gcx` in `Grapher.app` to visualise the algorithm.

## TODO

`bitDepth` and `frequency` options would ideally instances of `AudioParam`. Unfortunately the Web Audio API does not yet allow standalone instances to be created.