import React, {useState} from "react";
import Chart from "react-apexcharts";

function ApexChart() {
    const [range, setRange] = useState("Last Year");

    const options = {
        chart: {
            type: "line",
            height: 450,
            toolbar: {show: false},
            zoom: {enabled: false},
            foreColor: "#9ca3af",
        },

        colors: ["#00e676", "#ff5252"],

        stroke: {
            curve: "smooth",
            width: 3,
        },

        dataLabels: {
            enabled: false,
        },

        grid: {
            borderColor: "#1f2937",
            strokeDashArray: 4,
        },

        markers: {
            size: 0,
            hover: {size: 6},
        },

        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: {
                style: {colors: "#9ca3af"},
            },
        },

        yaxis: {
            min: -10,
            max: 120,
            tickAmount: 5,
            labels: {
                formatter: (val) => `${val}%`,
                style: {colors: "#9ca3af"},
            },
        },

        legend: {
            position: "top",
            horizontalAlign: "left",
            labels: {colors: "#e5e7eb"},
        },

        tooltip: {
            theme: "dark",
            y: {
                formatter: (val) => `${val.toFixed(2)}%`,
            },
        },

        title: {
            text: "Historical Prediction Performance Vs. S&P 500",
            align: "left",
            style: {
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
            },
        },
    };

    const series = [
        {
            name: "Historical Prediction Performance",
            data: [15, 25, 30, 28, 40, 55, 70, 60, 65, 45, 60, 50],
        },
        {
            name: "S&P 500",
            data: [30, 20, 35, 32, 60, 55, 80, 90, 75, 85, 70, 80],
        },
    ];

    return (
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-white text-lg font-semibold">
                    Historical Prediction Performance Vs. S&P 500
                </h2>
                <select
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="text-gray-300 border border-gray-600 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Last Year</option>
                    <option>Last 6 Months</option>
                    <option>Last 3 Months</option>
                    <option>Last Month</option>
                </select>
            </div>

            <Chart options={options} series={series} type="line" height={380}/>
        </div>
    );
}

export default ApexChart;