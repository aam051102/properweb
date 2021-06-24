import { JSDOM } from "jsdom";

const win = new JSDOM("").window;
const doc = win.document;

export { doc as document };