/*
 * The lowest requirements for JSX rendering to function server-side.
 * This code is only functional for the current state of jsx/index.js; Nothing less and nothing more.
 */

/**
 * An object where the keys represent the input attribute name, and the values represent the in-browser attribute name.
 */
const ATTR_NAMES = {
    "className": "class",
    "htmlFor": "for"
};

/**
 * DOM fragment stand-in.
 */
class DOMNodeFragment {
    constructor() {
        this.children = [];
        this.textContent = "";
    }

    get outerHTML() {
        // Children
        let childCode = "";
        this.children.forEach((child) => {
            childCode += child.outerHTML;
        });

        return childCode || this.textContent;
    }

    appendChild(node) {
        this.children.push(node);
    }
}

/**
 * DOM text node stand-in.
 */
class DOMTextNode {
    constructor(nodeValue) {
        this.nodeValue = nodeValue;
    }

    get outerHTML() {
        return this.nodeValue;
    }
}

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
    }

    get outerHTML() {
        // Children
        let childCode = "";
        this.children.forEach((child) => {
            childCode += child.outerHTML;
        });

        // Attributes
        let attributeCode = "";
        const baseReference = new DOMNode();
        for (const attr in this) {
            if (baseReference[attr] === undefined) {
                attributeCode += " ";

                if (ATTR_NAMES[attr]) {
                    attributeCode += ATTR_NAMES[attr];
                } else {
                    attributeCode += attr;
                }

                attributeCode += `="${this[attr]}"`;
            }
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
        let node;
        if (tagName === "") {
            node = new DOMNodeFragment();
        } else {
            node = new DOMNode(tagName);
        }

        return node;
    };

    /**
     * Creates a text node.
     * @param {string} data 
     * @returns {DOMNode}
     */
    const createTextNode = (data) => {
        const node = new DOMTextNode(data);

        return node;
    };

    return {
        createElement,
        createTextNode
    };
})();

export { document };