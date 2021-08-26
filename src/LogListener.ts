import Listener from "./Listener"
import Value from "./Value"

export default class LogListener<T> extends Listener<T> {
    constructor(value: Value<T> | null = null) {
        super((value: T) => console.log(value), value)
    }
}