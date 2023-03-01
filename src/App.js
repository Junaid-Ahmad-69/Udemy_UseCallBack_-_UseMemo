import React, {useState, useCallback} from "react";
import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutPut from "./Demo/DemoOutPut";

function App() {
    const [showDetail, setShowDetail] = useState(false)
    console.log("App Running");
    const toggleHandler = useCallback(() => {
        setShowDetail(prevState => !prevState);
    }, []);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutPut show={false}/>
            <Button onClick={toggleHandler}> Paragraph Toggle</Button>
        </div>
    );
}

export default App;