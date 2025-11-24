import Button from "../components/button";
import CounterBtn from "../components/CounterBtn";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loader from '../components/Loader'


export default function Home() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dragonball-api.com/api/characters')

            const data = await response.json()

            console.log(data)
            setItems(data.items)
        }

        fetchData()
    }, [])

    const handleLogout = async() => {
        setLoading(true)
        try{
            const res = await fetch('https://nodeclass-batch3.vercel.app/logout', {
                method: "GET",
                credentials: "include"
            })

            if(!res.ok){
                toast.error("Logout failed", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark"
                })
            }

            const data = await res.json()
            console.log(data)
            toast.success("Logout successful", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark"
            })

            // navigate('/login')
            
        }catch(err){
            console.error(err)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div>
        <ToastContainer/>
    <div>
    <h1>Hello Vite + React!</h1>
    <ul>
      <li>ijioroijbr</li>
    </ul>

    <Button name='Lanre'/>

    <CounterBtn/>
    </div>

    <Link to={'/about'}>
        Go to About Page
    </Link>

    <button className="text-white bg-red-600 p-4 cursor-pointer rounded-3xl w-[10rem]"
    onClick={handleLogout}
    >
        {loading ? <Loader/> : 'Logout'}
    </button>

    <section className="w-full mt-20 flex flex-col items-center justify-center">
            {items.map((item, index) => (
                <div
                key={index}
                >
                    <div className="w-full">
                        <img src={item.image} className="w-16 rounded-full"/>
                    </div>

                    <h1>
                        {item.name}
                    </h1>

                    <p>
                        Gender: {item.gender}
                    </p>

                    <p>
                        Kill counts: {item.ki}
                    </p>
                </div>
            ))}
    </section>
        </div>
    )
};
