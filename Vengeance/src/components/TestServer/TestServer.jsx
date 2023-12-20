import React, { useState } from 'react'
import './TestServer.css'
import axios from 'axios'

function TestServer() {

    const [formData, setFormData] = useState({
        name : "",
        age: 0,
        gender: "",
        addType: "",
        state: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://172.16.14.56:3000/user/add_ben", formData);
            console.log('Data submitted successfully:', response.data);
            // Handle successful submission (e.g., clear form, show success message)
        } catch (err) {
            console.error('Error submitting data:', err);
            // Handle error (e.g., display error message)
        }
    };

   

    return (
        <div className='test-server'>
            <div className='ts-form'>
                <form>
                    <label htmlFor="name">Beneficiary Name:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        // onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="Gender">Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="contact">Addiction type:</label>
                    <input
                        type="text"
                        id="addType"
                        name="addType"
                        value={formData.addType}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' onClick={handleSubmit} style={{margin: "2rem"}}>submit</button>

                </form>
            </div>
        </div>
    )
}

export default TestServer
