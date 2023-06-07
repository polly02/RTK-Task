import { useDispatch, useSelector } from "react-redux";
import { change } from "../slice/themeSlice";

const styles = {
    h: {
        textAlign: 'center'
    },
    dark: {
        margin: '3% auto',
        height: '400px',
        background: ' rgb(0, 166, 255)',
    },
    light: {
        margin: '3% auto',
        height: '400px',
        background: 'rgb(0, 32, 50)',
    },
    button: {
        margin: '100px 575px'
    }
}

function Theme() {
    const bool = useSelector(state => state.theme.value)
    const dispatch = useDispatch()

    return (
        <>
            <div style={styles[bool ? 'dark' : 'light']}>
                <h1 style={styles.h}>THEME</h1>
                <button style={styles.button} onClick={() => dispatch(change())}>поменять тему</button>
            </div>
        </>
    )
}

export default Theme