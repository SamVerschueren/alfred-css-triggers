'use strict';
const alfy = require('alfy');
const triggers = require('./lib/css-triggers');
const utils = require('./lib/utils');

const parsed = utils.parse(alfy.input);

triggers.getData(parsed.engine)
	.then(props => {
		const items = alfy
			.matches(parsed.input, props, 'name')
			.map(item => {
				const url = `https://csstriggers.com/${item.name}`;

				return {
					title: item.name,
					subtitle: item.initial.value,
					icon: {
						path: `./icons/${item.initial.icon}`
					},
					autocomplete: item.name,
					arg: url,
					quicklookurl: url,
					mods: {
						alt: {
							subtitle: item.change.value,
							icon: {
								path: `./icons/${item.change.icon}`
							}
						}
					}
				};
			});

		alfy.output(items);
	});
