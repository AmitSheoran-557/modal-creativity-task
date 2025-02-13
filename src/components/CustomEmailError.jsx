'use client'
import React, { useState } from 'react'

const CustomEmailError = () => {

    const [formDetails, setFormDetails] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(false)

    const HandleChange = (e) => {
        setFormDetails({ ...formDetails, email: " " });
        setError(true)
    }
    return (
        <div className='py-20 bg-black'>
            <input className='bg-white' type="email" value={formDetails.email} onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })} />
            <button onClick={HandleChange} className='bg-white mx-3 px-3'>submit</button>
            {
                error && formDetails.email.length === 0 && <p className='text-red-700'>email is required</p>
            }
        </div>
    )
}

export default CustomEmailError
