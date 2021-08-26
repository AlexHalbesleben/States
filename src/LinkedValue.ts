import Value from "./Value";
import Listener from "./Listener";

export default class LinkedValue<T> extends Value<T> {
    listener: Listener<T>

    constructor(value: Value<T>, callback: (val: T) => T = (val: T) => val, ...listeners: Listener<T>[]) {
        super(value.value, ...listeners)
        this.listener = new Listener((val: T) => {
            this.value = callback(val)
        })
        this.listener.connect(value);
    }
}