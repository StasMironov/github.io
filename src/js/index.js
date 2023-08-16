import './polyfills';
import './utils/slideToggle';
import './utils/scroll';
import './utils/userAgent';

import libs from "./libs";

import { devices } from './utils/breakpoints';

// components
import Menu from './components/menu';
import ScrollAnimation from './components/scroll-animation/scroll-animation';
import Header from './components/header';

window.UPB = window.UPB || {};
window.breakpoints = devices;
window.$ = $;
window.jQuery = $;

__webpack_public_path__ = window.__webpack_public_path__ || '';

window.addEventListener('load', () => {
	document.documentElement.classList.add('is-loaded');
	new ScrollAnimation();
});


document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add('content-loaded');

	libs.init();
	Menu.init();
	Header.init();
});

window.addEventListener('reinit', () => {
	libs.init();
	Menu.init();
	Header.init();
});
