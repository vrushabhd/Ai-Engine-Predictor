import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
    const [overtimeHours, setOvertimeHours] = useState("");
    const [leavesTaken, setLeavesTaken] = useState("");
    const [sprintDuration, setSprintDuration] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const employeeData = {
            overtime_hours: parseFloat(overtimeHours),
            leaves_taken: parseInt(leavesTaken),
            sprint_duration_weeks: parseInt(sprintDuration)
        };

        setLoading(true);
        try {
            // Send data to the backend for prediction
            const response = await axios.post("http://127.0.0.1:5000/predict", [employeeData]);
            setPrediction(response.data.predictions[0]);
            setError(null);  // Reset error if successful
        } catch (err) {
            setError("Error occurred while fetching prediction.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const chartData = {
        labels: ["Prediction"],
        datasets: [
            {
                label: "Predicted Story Points",
                data: prediction ? [prediction] : [],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: false
            }
        ]
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="header">AI-Powered Insights Engine</h1>

                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="number"
                        value={overtimeHours}
                        onChange={(e) => setOvertimeHours(e.target.value)}
                        placeholder="Overtime Hours"
                        required
                        className="input"
                    />
                    <input
                        type="number"
                        value={leavesTaken}
                        onChange={(e) => setLeavesTaken(e.target.value)}
                        placeholder="Leaves Taken"
                        required
                        className="input"
                    />
                    <input
                        type="number"
                        value={sprintDuration}
                        onChange={(e) => setSprintDuration(e.target.value)}
                        placeholder="Sprint Duration (Weeks)"
                        required
                        className="input"
                    />
                    <button type="submit" className="button" disabled={loading}>
                        {loading ? "Loading..." : "Get Prediction"}
                    </button>
                </form>

                {error && <p className="error">{error}</p>}
                {prediction !== null && (
                    <div className="prediction-result">
                        <h2 className="prediction-text">Predicted Story Points: {prediction}</h2>
                        
                        {/* Display Chart with controlled size */}
                        <div className="chart-container">
                            <Line data={chartData} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
