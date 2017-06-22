// Type definitions for win-grow.js 1.0.4
// Project: https://github.com/nikkorn/win-grow

declare namespace wingrow
{
	/**
	 * Expands the specified element to fill the browser window.
	 * @param element The element to expand.
	 */
	function toggle(element: Element): void;
	
	/**
	 * By default this returns true if *any* element is filling the window.
	 * If an element is passed this returns true if the specified element is filling the window.
	 * @param element Optionally the element to check.
	 * @returns Whether the window is filled.
	 */
	function isWindowFilled(element?: Element): boolean;
	
	/**
	 * Revert any currently expanded element to its original position and dimensions.
	 */
	function close(): void;
}
