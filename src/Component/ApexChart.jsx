import React from "react";
import Chart from "react-apexcharts";

function ApexChart() {
    const options = {
        chart: {
            height: 350,
            type: "line",
            dropShadow: {
                enabled: true,
                color: "#fff",
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.5,
            },
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: "smooth",
        },
        title: {
            text: "Historical Prediction Performance Vs. S&P 500",
            align: "left",
            style: {
                color: "#ffffff",
            },
        },
        grid: {
            borderColor: "#1e1b4b",
        },
        markers: {
            size: 4,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            title: {
                text: "Month",
                style: {
                    color: "#ffffff",
                },
            },
            labels: {
                style: {
                    colors: "#ffffff",
                },
            },
        },
        yaxis: {
            title: {
                text: "Temperature",
                style: {
                    color: "#ffffff",
                },
            },
            labels: {
                style: {
                    colors: "#ffffff",
                },
            },
            min: 5,
            max: 40,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5,
            labels: {
                colors: "#ffffff",
            },
        },
        tooltip: {
            theme: "dark"
        },
    };

    const series = [
        {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13],
        },
    ];

    return (
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] p-5 rounded-xl shadow-md h-full">
            <Chart options={options} series={series} type="line" height={450}/>
        </div>
    );
}

export default ApexChart;