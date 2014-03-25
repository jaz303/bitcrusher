var floor = Math.floor;

function clamp(min, max, v) {
	if (v < min) return min;
	if (v > max) return max;
	return v;
}

module.exports = function(audioContext, opts) {

	opts = opts || {};

	var bufferSize 		= opts.bufferSize || 4096,
		channelCount	= opts.channelCount || 2,
		bits 			= clamp(1, Infinity, (opts.bits || 8) | 0),
		normFreq		= clamp(0, 1, opts.frequency || 1),
		step 			= 2 * Math.pow(0.5, bits),
		invStep			= 1 / step,
		phasor 			= 0,
		last 			= 0;

	var processor = audioContext.createScriptProcessor(bufferSize, channelCount, channelCount);
		
	processor.onaudioprocess = function(evt) {

		var ib = evt.inputBuffer,
			ob = evt.outputBuffer;

		for (var i = 0; i < channelCount; ++i) {

			var id = ib.getChannelData(i),
				od = ob.getChannelData(i);

			for (var s = 0, l = ob.length; s < l; ++s) {
				phasor += normFreq;
				if (phasor > 1) {
					phasor -= 1;
					last = step * floor((id[s] * invStep) + 0.5);
				}
				od[s] = last;
			}

		}

	}

	return processor;

}