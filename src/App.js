import Quote from "./Quote";
import { useState } from "react";

const App = () => {
    const [id, setID] = useState(0);
    return (
        <div className="App">
            <h1>React App</h1>
            <Quote id={id} setID={setID} />
        </div>
    );
};

export default App;
