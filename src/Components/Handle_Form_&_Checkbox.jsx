
// in this component we learn how to handle a form 

import React, { useState } from "react";


function HandleForm() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, interest)
        e.preventDefault()
    }
    return (
        <div className="App">
            <h1>Handle Form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select> <br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
                <button type="reset">Clear</button>

            </form>
        </div>
    );
}

export default HandleForm;