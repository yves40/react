import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ThemeProvider from "./context/ThemeProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>     {/* Encapsule l'application dans un provider de contexte */}
        <App />
    </ThemeProvider>
)
