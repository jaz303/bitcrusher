# bitcrusher

Implementation of a bit-crush effect using the Web Audio API.

## Installation

    $ npm install bitcrusher

## Usage

```javascript
var bitcrusher = require('bitcrusher');

var audioContext = window.createAudioContext();

var bitcrushNode = bitcrush(audioContext, {
    bits: 6,
    frequency: 0.5
});

var mySource = // ... create audio source

mySource.connect(bitcrushNode);
bitcrushNode.connect(audioContext.destination);
```

## API

#### `bitcrusher(opts)`

Create a new bitcrusher with the specified options:

    * `bufferSize`: defaults to 4096
    * `channelCount`: defaults to 2
    * `bits`: output resolution, defaults to 8
    * `frequency`: sample-and-hold ratio; used to reduce the perceived output frequency. Defaults to 1 (no change).

Returns a `ScriptProcessorNode` configured with a bitcrush effect.

## TODO

`bits` and `frequency` options should be `AudioParam`s. Unfortunately the Web Audio API does not yet allow standalone instances to be created.