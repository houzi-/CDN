window.open-defuser.js application/javascript
(function() {
	var wo = window.open,
		target = '{{1}}',
		needle = '{{2}}';
	if ( target === '' || target === '{{1}}' ) {
		target = false;
	} else {
		target = !(+target);
	}
	if ( needle === '' || needle === '{{2}}' ) {
		needle = '.?';
	} else if ( /^\/.+\/$/.test(needle) ) {
		needle = needle.slice(1,-1);
	} else {
		needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	needle = new RegExp(needle);
	window.open = (function(a) {
		if ( needle.test(a) === target ) {
			return wo.apply(window, arguments);
		}
	}).bind(window);
})();