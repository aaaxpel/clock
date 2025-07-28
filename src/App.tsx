import { createSignal } from "solid-js"
import styles from "./App.module.css"
import ToggleTheme from "./ToggleTheme.tsx"

const App = () => {
    const [hours, setHours] = createSignal(0)
    const [minutes, setMinutes] = createSignal(0)
    const [seconds, setSeconds] = createSignal(0)

    const [toggle, setToggle] = createSignal(false)

    setInterval(() => {
        if (toggle() == true) {
            if (seconds() == 59) {
                setSeconds(0)

                if (minutes() == 59) {
                    setMinutes(0)
                    setHours(hours() + 1)
                } else {
                    setMinutes(minutes() + 1)
                }
            } else {
                setSeconds(seconds() + 1)
            }
        }
    }, 1000)

    const displayHours = () => {
        if (hours() < 10) {
            return '0' + hours()
        } else {
            return hours()
        }
    }    
    const displayMinutes = () => {
        if (minutes() < 10) {
            return '0' + minutes()
        } else {
            return minutes()
        }
    }
    const displaySeconds = () => {
        if (seconds() < 10) {
            return '0' + seconds()
        } else {
            return seconds()
        }
    }

    const handleToggle = () => setToggle(!toggle())

    const handleReset = () => {
        setHours(0)
        setMinutes(0)
        setSeconds(0)

        setToggle(false)
    }

    return <div>
        <div class={ styles.clock }>
            <span class="hours">{ displayHours() }:</span>
            <span class="minutes">{ displayMinutes() }:</span>
            <span class="seconds">{ displaySeconds() }</span>
        </div>
        <div class={ styles.control }>
            <button classList={{
                [styles.active]: toggle(),
                [styles.inactive]: !toggle()
            }} onclick={ handleToggle } />
            <button class={ styles.reset } onclick={ handleReset } />
            <ToggleTheme />
        </div>
    </div>
}

export default App