import React, {useState} from 'react'

export default function Menu() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='menu'>
            <h1>Random Number</h1>
            <h1>(1-100)</h1>
        </div>
    );
}