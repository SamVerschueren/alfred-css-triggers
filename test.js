import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('background-color');

	t.deepEqual(result, [
		{
			title: 'background-color',
			subtitle: '               Paint     Composite',
			icon: {
				path: './icons/paint-composite.png'
			},
			autocomplete: 'background-color',
			arg: 'https://csstriggers.com/background-color',
			quicklookurl: 'https://csstriggers.com/background-color',
			mods: {
				alt: {
					subtitle: '               Paint     Composite',
					icon: {
						path: './icons/paint-composite.png'
					}
				}
			}
		}
	]);
});
