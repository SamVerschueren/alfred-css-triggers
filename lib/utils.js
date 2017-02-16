'use strict';
const repeating = require('repeating');

const engines = ['blink', 'gecko', 'webkit', 'edge'];

exports.toString = props => {
	props = props || {};

	return [
		props.layout ? 'Layout    ' : repeating(15),
		props.paint ? 'Paint     ' : repeating(14),
		props.composite ? 'Composite' : ''
	].join('');
};

exports.toIcon = props => {
	props = props || {};

	const icon = [
		props.layout && 'layout',
		props.paint && 'paint',
		props.composite && 'composite'
	].filter(Boolean).join('-');

	return `${icon.length > 0 ? icon : 'none'}.png`;
};

exports.parse = input => {
	const matches = input.match(/^(.*?) --(.*?)$/);

	if (!matches) {
		return {
			input: input.trim(),
			engine: engines[0]
		};
	}

	const engine = engines.indexOf(matches[2]) === -1 ? engines[0] : matches[2];

	return {
		input: matches[1].trim(),
		engine: engine === 'edge' ? 'edgehtml' : engine
	};
};
