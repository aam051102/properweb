const defs = {};

const DOM = (name, selector, all) => {
    if (selector) {
        if (all) {
            defs[name] = document.querySelectorAll(selector);
        } else {
            defs[name] = document.querySelector(selector);
        }
    }

    if (!defs[name]) {
        console.error(`Element by "${selector}" not found.`);
    }

    return defs[name];
};

export { DOM };

/*
 TODO: Replace DOM with JQuery global types and a transpile-time import of only the used parts of JQuery.
 If I decide to do this, I'll have to develope the closure transpiler as a separate repository.
 It'll probably make the most sense to use Google's Closure Compiler as a reference.
*/