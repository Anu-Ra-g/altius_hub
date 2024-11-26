import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function makeCall(){
        try{
            console.log("helo");
            
            const response = axios.post("http://localhost:8000/api/user/register/", {username, password})
            
            if (response.status === 200){
                navigate("/login")
            }
        }catch(error){
            console.log(error);
            
        }
    }

    return (
        <div className="flex justify-items h-screen">
    <htmlForm className="max-w-sm mx-auto">
        <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Your username</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@flowbite.com" onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={makeCall}>Submit</button>
    </htmlForm>
</div>
    )
}

export default Register