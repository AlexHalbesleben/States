import Value from "./Value"
import Listener from "./Listener"

export default class Timer extends Value<number> {
    constructor(interval: number, ...listeners: Listener<number>[]) {
        super(0, ...listeners)

        setInterval(() => {
            this.value++
        }, interval)
    }
}