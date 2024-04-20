import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [helloMessages, setHelloMessages] = useState([]);
    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + '/hello-world')
            .then(response => response.json())
            .then(data => setHelloMessages(data))
    }, []);

    return (
        <ul>
            {helloMessages.map((message, index) => (
                <li key={index}>{message.message}</li>
            ))}
        </ul>
    )
}

export default App
