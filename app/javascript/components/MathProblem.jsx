import React, {useState} from "react";

function MathProblem() {
    const [solution, setSolution] = useState("")

    async function handleSubmitMathProblem() {
        console.log("Submit...");

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

            const response = await fetch("http://127.0.0.1:3000/points.json", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                }
            });
            if (response.ok) {
                console.log(response);
                setSolution("");
            } else {
                throw response
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <p>For 100 Reward Points, Solve The Following</p>
            5 + 5 =
            <input
                type="text"
                value={solution}
                onChange={(e) => {
                    setSolution(e.target.value)
                }}
                className="border-1 p-2 rounded-lg m-2 w-32 border-neutral-600"/>
            <button onClick={handleSubmitMathProblem}>Submit</button>
        </div>
    );
}

export default MathProblem;
