interface Component {
	type: string,
    props: {
        children: Component[]
    } & {}
}

interface TextComponent extends Component {
	props: {
		nodeValue: string,
		children: Component[]
	} & {}
}

interface ProperStatic {
    (name: string, selector?: string, all?: boolean): any;

	fragment: string

    createElement(type: string, props: any, ...children: Component[]): Component;
	createTextElement(text: string): TextComponent;
	render(element: Component, container: Component): void;
	renderToString(element: Component, container?: Component): string;
}

declare const Proper: ProperStatic;
declare const P: ProperStatic;