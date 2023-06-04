import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validEmail } from '../slice/emailSlice';

function Email() {
    const count = useSelector(state => state.email.value)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input type="text" onChange={e => setInput(e.target.value)} />
            <button onClick={() => dispatch(validEmail(input))}>проверить</button>
            <div>{count}</div>
        </div>
    );
}

export default Email;
