export as namespace Proper;

export const fragment: string;

export function createElement(): any;
export function createTextElement(): any;
export function render(): any;
export function renderToString(): any;


// Export Preact code for JSX types
import { JSXInternal } from "preact/src/jsx";

export { JSXInternal as JSX };