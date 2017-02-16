'use strict';
const alfy = require('alfy');
const utils = require('./utils');

const SEVEN_DAYS = 7 * 86400000;

const getData = engine => alfy.fetch(`https://raw.githubusercontent.com/GoogleChrome/css-triggers/master/data/${engine}.json`, {
	maxAge: SEVEN_DAYS,
	transform: result => {
		const props = Object.keys(result.properties);

		const ret = {};

		for (const prop of props) {
			const idx = prop.lastIndexOf('-');

			const propName = prop.slice(0, idx);
			const modifier = prop.slice(idx + 1);

			if (!ret[propName]) {
				ret[propName] = {};
			}

			ret[propName][modifier] = result.properties[prop];
		}

		return Object.keys(ret).map(prop => ({
			name: prop,
			initial: {
				value: utils.toString(ret[prop].initial),
				icon: utils.toIcon(ret[prop].initial)
			},
			change: {
				value: utils.toString(ret[prop].change),
				icon: utils.toIcon(ret[prop].change)
			}
		}));
	}
});

exports.getData = engine => getData(engine || 'blink');
