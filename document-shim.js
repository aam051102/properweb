/*
 * The lowest requirements for JSX rendering to function server-side.
 * This code is only functional for the current state of jsx/index.js; Nothing less and nothing more.
 */

/**
 * DOM element stand-in.
 */
class DOMNode {
    constructor(tagName) {
        this.children = [];
        this.tagName = tagName || "";
        this.textContent = "";
        this.nodeValue = "";
        this.listeners = {};

        this.className = "";
        this.htmlFor = "";
    }

    get outerHTML() {
        // Text node special
        if (this.tagName === "text") {
            return this.nodeValue;
        }

        // Children
        let childCode = "";
        this.children.forEach((child) => {
            childCode += child.outerHTML;
        });

        // Fragment special
        if (this.tagName === "") {
            return childCode || this.textContent;
        }

        // Attributes
        let attributeCode = "";
        const baseReference = new DOMNode();
        for (const attr in this) {
            if (baseReference[attr] === undefined) {
                attributeCode += ` ${attr}="${this[attr]}"`;
            }
        }

        // TODO: Find some way to generalize this just a little bit. Most of the code in here is just to get the basics working.
        // className->class
        if (this.className !== "") {
            attributeCode += ` class="${this.className}"`;
        }

        // htmlFor->for
        if (this.htmlFor !== "") {
            attributeCode += ` for="${this.htmlFor}"`;
        }

        return `<${this.tagName}${attributeCode}>${childCode || this.textContent}</${this.tagName}>`;
    }

    addEventListener(eventName, callback) {
        this.listeners[eventName] = callback;
    }
    
    appendChild(node) {
        this.children.push(node);
    }
}

/**
 * Document stand-in.
 */
const document = (function() {
    /**
     * Creates element.
     * @param {string} tagName 
     * @returns {DOMNode}
     */
    const createElement = (tagName) => {
        const node = new DOMNode(tagName);

        return node;
    };

    /**
     * Creates a text node.
     * @param {string} data 
     * @returns {DOMNode}
     */
    const createTextNode = (data) => {
        const node = new DOMNode("text");

        node.textContent = data;

        return node;
    };

    return {
        createElement,
        createTextNode
    };
})();

export { document };