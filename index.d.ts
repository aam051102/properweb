import "./misc";

// Redeclaration is currently necessary for `import { Proper, P };`
declare const ProperTop: ProperStatic;

export {
	ProperTop as Proper,
	ProperTop as P
};

// TODO: Find a way to export JSX types properly.
import { JSXInternal } from "preact/src/jsx";

export import JSX = JSXInternal

export as namespace Proper;