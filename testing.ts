import Listener from "./src/Listener";
import Value from "./src/Value";
import LinkedValue from "./src/LinkedValue"
import LogListener from "./src/LogListener"
import Timer from "./src/Timer"

let timer = new Timer(1000)
let logger = new LogListener(timer)