const SYMBOL_CLICK_OUT_REF_FUNCTIONS = Symbol("CLICK_OUT_REF_FUNCTIONS");

export function OnClickOut(getRef) {
    return function (target, key) {
        console.log("Decorating");
        let functionMap = target[SYMBOL_CLICK_OUT_REF_FUNCTIONS];
        if (functionMap == null) {
            target[SYMBOL_CLICK_OUT_REF_FUNCTIONS] = functionMap = {};

            const oldComponentDidMount = target.componentDidMount;
            target.componentDidMount = function(){
                if (oldComponentDidMount) oldComponentDidMount.call(this,...arguments);
                onComponentDidMount.call(this,...arguments)
            };
            const oldComponentWillUnmount = target.componentWillUnmount;
            target.componentWillUnmount = function(){
                if (oldComponentWillUnmount) oldComponentWillUnmount.call(this,...arguments);
                onComponentWillUnmount.call(this,...arguments)
            };
            console.log();
        }
        functionMap[key] = getRef;

    }
}

const componentListenersMap = new Map();

function onComponentDidMount() {
    const component = this;
    const functionMap = component[SYMBOL_CLICK_OUT_REF_FUNCTIONS];
    const listeners = [];
    for(let key of Object.keys(functionMap)) {
        const domNode = functionMap[key](component);
        if (typeof domNode != "object") {
            throw new Error(`DomNode not passed to OnClickOut of component ${component}`)
        }
        const listener = component[key].bind(component);
        listeners.push({domNode, listener})
    }
    componentListenersMap.set(component,listeners)
}

function onComponentWillUnmount() {
    const component = this;
    componentListenersMap.delete(component)
}

function onHTMLClick(e) {
    const clickedElement = e.target;
    componentListenersMap.forEach((listenerList) => {
        for (let i = 0; i < listenerList.length; i++) {
            const {listener, domNode} = listenerList[i];
            if (domNode.contains(clickedElement)) continue;
            listener(clickedElement,domNode)
        }
    })
}

document.addEventListener('click', onHTMLClick, true);