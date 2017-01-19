// Type definitions for win-grow.js 1.0.4
// Project: https://github.com/nikkorn/win-grow

declare namespace wingrow
{
	/** Accepts a DOM element and expands it to fill the browser window. */
	function toggle(elem: Element): void;
	
	/** Returns true if win-grow is filling the window with an expanded element. */
	function isWindowFilled(): boolean;
	
	/** Revert any currently expanded element to its original position and dimensions. */
	function close(): void;
}