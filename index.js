'use strict';
const alfy = require('alfy');
const triggers = require('./lib/css-triggers');

triggers.getData()
	.then(props => {
		const items = alfy
			.inputMatches(props, 'name')
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
