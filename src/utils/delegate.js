/**
 * Adds event listeners to the target element.
 *
 * @param target Target element
 * @param selector Target selectors
 * @param type Event type
 * @param handler Event handler
 */
export function delegate(target, selector, type, handler) {
	function dispatchEvent(event) {
		const targetElement = event.target;

		if ((targetElement.matches || targetElement.webkitMatchesSelector || targetElement.msMatchesSelector).call(targetElement, selector)) {
			handler.call(targetElement, event);
		}
	}

	target.addEventListener(type, dispatchEvent, type === 'blur' || type === 'focus');
}
