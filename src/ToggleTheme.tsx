import { createSignal, onMount } from 'solid-js'
import styles from './App.module.css'

const ToggleTheme = () => {
    const [isDark, setIsDark] = createSignal(true)
    setIsDark(localStorage.getItem('theme') === 'dark')

    const HandleTheme = () => {
        const newTheme = !isDark() ? 'dark' : 'light'
        setIsDark(!isDark())
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    onMount(() => {
        const theme = localStorage.getItem('theme')
        setIsDark(theme === 'dark')
        document.documentElement.setAttribute('data-theme', theme)
    })

    return <button
        class={ styles.theme }
        onclick={ HandleTheme }
    />
}

export default ToggleTheme