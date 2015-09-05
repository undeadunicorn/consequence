var namespaces = {}
var listenableMap = new WeakMap()



export function on (object, identifier, listener) {
    listenersFor(object, identifier).push(listener)
}



export function off (object, identifier, listener) {
    let listeners = listenersFor(object, identifier)
    let index = listeners.indexOf(listener)
    if(index !== -1) {
        listeners.splice(index, 1)
    }
}



export function emit (object, identifier, ...args) {
    let listeners = listenersFor(object, identifier)

    for (let listener of listeners) {
        listener.apply(object, args)
    }
}



function getListenable (object) {
    if (typeof object === 'string') {
        namespaces[object] = namespaces[object] || {}
        object = namespaces[object]
    }

    if (!listenableMap.has(object)) {
        listenableMap.set(object, {})
    }

    return listenableMap.get(object)
}



function listenersFor (object, identifier) {
    let listenable = getListenable(object)
    listenable[identifier] = listenable[identifier] || []

    return listenable[identifier]
}

