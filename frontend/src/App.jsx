import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [helloMessage, setHelloMessage] = useState('');
    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + '/hello-world')
            .then(response => response.json())
            .then(data => setHelloMessage(data.message))
    }, []);
    return <h1>{helloMessage}</h1>
}

export default App
