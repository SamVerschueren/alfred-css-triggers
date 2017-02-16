import test from 'ava';
import alfyTest from 'alfy-test';
import {parse} from './lib/utils';

test('parse input', t => {
	t.deepEqual(parse('color'), {input: 'color', engine: 'blink'});
	t.deepEqual(parse('color '), {input: 'color', engine: 'blink'});
	t.deepEqual(parse('background-color'), {input: 'background-color', engine: 'blink'});
	t.deepEqual(parse('color --edge'), {input: 'color', engine: 'edgehtml'});
	t.deepEqual(parse('color --gecko'), {input: 'color', engine: 'gecko'});
	t.deepEqual(parse('color --foo'), {input: 'color', engine: 'blink'});
	t.deepEqual(parse('color  --webkit'), {input: 'color', engine: 'webkit'});
});

test('`background-color`', async t => {
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

test('`align-content` on Gecko', async t => {
	const alfy = alfyTest();
	const result = await alfy('align-content --gecko');

	t.deepEqual(result, [
		{
			title: 'align-content',
			subtitle: '                             Composite',
			icon: {
				path: './icons/composite.png'
			},
			autocomplete: 'align-content',
			arg: 'https://csstriggers.com/align-content',
			quicklookurl: 'https://csstriggers.com/align-content',
			mods: {
				alt: {
					subtitle: '                             ',
					icon: {
						path: './icons/none.png'
					}
				}
			}
		}
	]);
});

test('`background-blend-mode` on edge', async t => {
	const alfy = alfyTest();
	const result = await alfy('blend-mode --edge');

	t.deepEqual(result, [
		{
			title: 'background-blend-mode',
			subtitle: '                             ',
			icon: {
				path: './icons/none.png'
			},
			autocomplete: 'background-blend-mode',
			arg: 'https://csstriggers.com/background-blend-mode',
			quicklookurl: 'https://csstriggers.com/background-blend-mode',
			mods: {
				alt: {
					subtitle: '                             ',
					icon: {
						path: './icons/none.png'
					}
				}
			}
		}
	]);
});
