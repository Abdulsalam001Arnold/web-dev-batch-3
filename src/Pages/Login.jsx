

import { useState } from "react"

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://nodeclass-batch3.vercel.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })

            if(!response.ok) {
                throw new Error('Login failed')
            }

            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }


    return(
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <form
            className="w-100 shadow-2xl p-6 flex flex-col gap-4 rounded-lg border"
             >
                <div className="flex gap-4 items-center justify-center">
                    <label>
                        Email:
                    </label>

                    <input name="email" type="email" id="email" placeholder="Please enter your email" onChange={handleChange} className="border-2 border-gray-700 p-4 rounded-lg"/>
                </div>


                <div className="flex gap-4 items-center justify-center">
                    <label>
                        Password:
                    </label>

                    <input name="password" type="password" id="password" placeholder="Please enter your password" onChange={handleChange} className="border-2 border-gray-700 p-4 rounded-lg"/>
                </div>

                <button onClick={handleSubmit} type="submit" className="mt-10 cursor-pointer">
                    Login
                </button>
            </form>
        </div>
    )
};
