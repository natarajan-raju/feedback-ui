import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";


function App(){
    
    return(
    <React.StrictMode>
    <>
        <Header />
        <div className="container">
            <FeedbackItem />
        </div>        
    </>
    
    </React.StrictMode>
    );
}

export default App;