
/*import { JSXInternal } from "preact/src/jsx";

declare interface Component {
	type: string,
    props: {
        children: Component[]
    } & {}
}

declare interface TextComponent extends Component {
	props: {
		nodeValue: string,
		children: Component[]
	} & {}
}

interface ProperBase {
	createElement(type: string, props: any, ...children: Component[]): Component;
	createTextElement(text: string): TextComponent;
	render(element: Component, container: Component): void;
	renderToString(element: Component, container?: Component): string;
}

interface ProperStatic {
	(name: string, selector?: string, all?: boolean): any
	fragment: string
	readonly fn: ProperBase
}*/



/// <reference path="ProperStatic.d.ts" />
/// <reference path="ProperBase.d.ts" />
/// <reference path="misc.d.ts" />

export = Proper;
