import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePredict = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", [
                { overtime_hours: 6, leaves_taken: 1, sprint_duration_weeks: 2 },
            ]);
            const predictedStoryPoints = response.data.predictions[0];
            setPredictions((prev) => [...prev, predictedStoryPoints]);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        } finally {
            setLoading(false);
        }
    };

    const chartData = {
        labels: predictions.map((_, index) => `Sprint ${index + 1}`),
        datasets: [
            {
                label: "Predicted Story Points",
                data: predictions,
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Sprint",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Story Points",
                },
            },
        },
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="header">AI-Powered Insights Engine</h1>
                <button className="button" onClick={handlePredict} disabled={loading}>
                    {loading ? "Loading..." : "Get Prediction"}
                </button>
                {predictions.length > 0 && (
                    <div style={{ marginTop: "30px" }}>
                        <Line data={chartData} options={chartOptions} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
