export = JSX;
export as namespace JSX;

declare namespace JSX {
	function createElement(): any;
	function createTextElement(): any;
	function render(): any;
	function renderToString(): any;
}