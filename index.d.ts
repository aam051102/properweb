export as namespace Proper;
export as namespace P;

// JSX
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

export const fragment: string;

export function createElement(type: string, props: any, ...children: Component[]): Component;
export function createTextElement(text: string): TextComponent;
export function render(element: Component, container: Component): void;
export function renderToString(element: Component, container?: Component): string;

// Export Preact code for JSX types
import { JSXInternal } from "preact/src/jsx";

export { JSXInternal as JSX };

// DOM
export function DOM(name: string, selector?: string, all?: boolean): any;