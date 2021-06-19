/*
Original: https://pomb.us/build-your-own-react/
*/

/**
 * Generic fragment.
 */
const fragment = "JSX_FRAG";

/**
 * Creates a new element of a type with props.
 * @param {*} type 
 * @param {*} props 
 * @param  {...any} children 
 * @returns 
 */
const createElement = (type, props, ...children) => ({
    type,
    props: {
        ...props,
        children: children.map(child =>
            typeof child === "object" ? child : createTextElement(child))
    }
});

/**
 * Creates a text element.
 * @param {string} text 
 * @returns 
 */
const createTextElement = text => ({
    type: "TEXT_ELEMENT",
    props: {
        nodeValue: text,
        children: []
    }
});

/**
 * Renders HTML elements to the DOM.
 * @param {*} element 
 * @param {*} container 
 * @returns 
 */
const render = (element, container) => {
    let dom;
    switch (element.type) {
        case "TEXT_ELEMENT":
            dom = document.createTextNode("");
            break;

        case fragment:
            element.props.children.forEach(child => render(child, container));
            return;

        default:
            dom = document.createElement(element.type);
            break;
    }

    // Non-frag elements
    const isProperty = key => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            if (name.startsWith("on")) {
                let eventName = name.substr(3); // Remove "on"
                eventName = name[2].toLowerCase() + eventName; // Make first character lowercase

                dom.addEventListener(eventName, element.props[name]);
            } else {
                dom[name] = element.props[name];
            }
        });

    element.props.children.forEach(child => render(child, dom));
    container.appendChild(dom);
};

/**
 * Renders HTML elements to a string.
 * @param {*} element 
 * @param {*} container 
 * @returns 
 */
const renderToString = (element, container) => {
    let dom;
    switch (element.type) {
        case "TEXT_ELEMENT":
            dom = document.createTextNode("");
            break;

        case fragment:
            element.props.children.forEach(child => renderToString(child, dom));
            return;

        default:
            dom = document.createElement(element.type);
            break;
    }

    // Non-frag elements
    const isProperty = key => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name];
        });

    element.props.children.forEach(child => renderToString(child, dom));

    if (container === undefined) {
        return dom.outerHTML;
    }

    container.appendChild(dom);
};

export {
    createElement, render, renderToString, fragment 
};