export = properweb;
export as namespace properweb;

//import * as JSXInternal from "./jsx";

declare namespace properweb {
	//export import JSX = JSXInternal;
	export interface JSX {
		testVariable: string
	}

	let testVariable: string;
}