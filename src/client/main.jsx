import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HandleError from "./HandleError.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HandleError>
            <App/>
        </HandleError>
    </React.StrictMode>
)
