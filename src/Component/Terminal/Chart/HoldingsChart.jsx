import React from "react";
import Chart from "react-apexcharts";

const HoldingsChart = () => {
    const options = {
        chart: {
            type: "area",
            toolbar: { show: false },
            background: "transparent",
        },

        theme: {
            mode: "dark",
        },

        stroke: {
            curve: "smooth",
            width: 2,
        },

        colors: ["#22c55e"],

        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                opacityFrom: 0.3,
                opacityTo: 0,
                stops: [0, 100],
            },
        },

        grid: {
            borderColor: "#1e293b",
            strokeDashArray: 4,
        },

        xaxis: {
            labels: {
                style: { colors: "#94a3b8" },
            },
            axisBorder: { show: false },
        },

        yaxis: {
            labels: {
                style: { colors: "#94a3b8" },
            },
        },

        tooltip: {
            theme: "dark",
        },
    };

    const series = [
        {
            name: "Portfolio",
            data: [10, 15, 14, 18, 17, 22, 25, 23, 28, 30],
        },
    ];

    return (
        <Chart options={options} series={series} type="area" height="100%" />
    );
};

export default HoldingsChart;