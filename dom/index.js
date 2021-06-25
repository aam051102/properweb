const defs = {};
const DOM = (name, selector, all) => {
    if (selector) {
        if (all) {
            defs[name] = document.querySelectorAll(selector);
        } else {
            defs[name] = document.querySelector(selector);
        }
    }

    return defs[name];
};

export { DOM };