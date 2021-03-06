import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [text, setText] = useState("Have no data fetched");

    const fetchData = async () => {
        const fetchedData = await axios.get("/.netlify/functions/app/test");
        setText(fetchedData.data);
    };

    return (
        <div className="App">
            <button onClick={fetchData}>Fetch Data</button>
            {text}
        </div>
    );
}

export default App;
