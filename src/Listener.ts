import Value from "./Value";

export default class Listener<T> {
    value: Value<T> | null
    callback: (value: T) => void

    constructor(callback: (value: T) => void, value: Value<T> | null = null) {
        this.callback = callback
        this.value = value
        if (value) {
            this.connect(value)
        }
    }

    connect(value: Value<T>) {
        value.addListener(this)
    }

    disconnect() {
        this.value?.removeListener(this)
    }
}