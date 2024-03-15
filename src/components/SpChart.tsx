import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

interface SplineChartProps {
    data: number[];
    index: string; 
    change:number;
}

const SplineChart: React.FC<SplineChartProps> = ({ data, index, change }) => {
    if (!data  || data.length === 0) return null;

    const labels = Array.from({ length: data.length }, (_, i) => i + 1);

    
    const chartData = {
        labels: labels,
        datasets: [{
            data: data,
            borderColor: (change>=0? 'green':'red'),
            tension: 0.4, 
            pointRadius: 0, 
            pointHoverRadius: 0,
        }]
    };
    useEffect(() => {
        const ctx = document.getElementById(`spline-chart-${index}`) as HTMLCanvasElement; 
        const chart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false, 
                    },
                },
                scales: {
                    x: {
                        display: false, 
                    },
                    y: {
                        display: false,
                    },
                },
            },
        });
        return () => chart.destroy();
    }, [data, index]);
    return <canvas id={`spline-chart-${index}`} />;
    
};

export default SplineChart;