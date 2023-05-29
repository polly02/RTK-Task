import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from '../slice/mathSlice';

function Math() {
    const count = useSelector(state => state.math.value)
    const [ input, setInput ] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input type="text" onChange={e => setInput(e.target.value)} />
            <button onClick={() => dispatch(calculate(input))}>равно</button>
            <div>{count}</div>
        </div>
    );
}

export default Math;
