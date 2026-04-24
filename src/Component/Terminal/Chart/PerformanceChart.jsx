import React from "react";
import Chart from "react-apexcharts";

const PerformanceChart = () => {
    const series = [
        {
            name: "Holdings",
            data: [0, 5, 10, 7, 15, 20, 25, 55, 29, 25, 15, 30],
        },
        {
            name: "US Market",
            data: [0, 3, 8, 12, 18, 25, 15, 48, 20, 35, 15, 32],
        },
    ];

    const options = {
        chart: {
            type: "line",
            toolbar: {show: false},
            background: "transparent",
        },
        theme: {
            mode: "dark",
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        colors: ["#22c55e", "#3b82f6"],
        grid: {
            borderColor: "#1f2937",
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {style: {colors: "#9ca3af"}},
        },
        yaxis: {
            labels: {
                style: {colors: "#9ca3af"},
                formatter: (val) => `${val}%`,
            },
        },
        legend: {
            labels: {colors: "#e5e7eb"},
        },
    };

    return (
        <Chart options={options} series={series} type="line" height={200}/>
    );
};

export default PerformanceChart;