import React from "react";
import Chart from "react-apexcharts";

const ScoreChart = ({ value = 50 }) => {
    const options = {
        chart: {
            type: "radialBar",
            sparkline: { enabled: true },
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: "65%",
                },
                track: {
                    background: "#1f2937",
                    strokeWidth: "100%",
                },
                dataLabels: {
                    name: { show: false },
                    value: {
                        offsetY: 10,
                        fontSize: "22px",
                        color: "#fff",
                        formatter: () => value,
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                gradientToColors: ["#22c55e"],
                stops: [0, 100],
                colorStops: [
                    { offset: 0, color: "#ef4444" },
                    { offset: 50, color: "#9ca3af" },
                    { offset: 100, color: "#22c55e" },
                ],
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Score"],
    };

    return (
        <div className="flex justify-center">
            <Chart options={options} series={[value]} type="radialBar" height={250} />
        </div>
    );
};

export default ScoreChart;