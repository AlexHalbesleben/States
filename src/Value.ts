import Listener from "./Listener"

export default class Value<T> {
    _value: T
    listeners: Listener<T>[] = []

    constructor(value: T, ...listeners: Listener<T>[]) {
        this._value = value
        listeners.forEach(this.addListener)
    }

    addListener(listener: Listener<T>) {
        listener.value = this
        this.listeners.push(listener)
    }

    removeListener(listener: Listener<T>) {
        let listenerIndex = this.listeners.indexOf(listener)
        this.listeners[listenerIndex].value = null
        this.listeners.splice(listenerIndex, 1)
    }

    get value(): T {
        return this._value
    }

    set value(val: T) {
        this._value = val
        this.listeners.forEach((listener) => {
            listener.callback(val)
        })
    }
}