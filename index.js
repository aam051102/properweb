import {
    createElement, createTextElement, fragment, render, renderToString 
} from "./jsx";

import { DOM } from "./dom";

// Link DOM function to Proper()
const Proper = function(name, selector, all) {
    return new Proper.fn.init(name, selector, all);
};

Proper.fn = Proper.prototype = { constructor: Proper };

Proper.fn.init = function (name, selector, all) {
    return DOM(name, selector, all);
};

// Link imports to Proper namespace
Proper.DOM = Proper.fn.DOM = DOM;

// TODO: Find a more dynamic way to link these
Proper.createElement = Proper.fn.createElement = createElement;
Proper.createTextElement = Proper.fn.createTextElement = createTextElement;
Proper.fragment = Proper.fn.createElefragmentment = fragment;
Proper.render = Proper.fn.render = render;
Proper.renderToString = Proper.fn.renderToString = renderToString;

export {
    Proper, Proper as P 
};