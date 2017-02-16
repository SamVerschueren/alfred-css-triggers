'use strict';
const repeating = require('repeating');

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
