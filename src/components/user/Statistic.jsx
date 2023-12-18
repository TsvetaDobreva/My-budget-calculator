import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { walletService } from "../../services/walletService";

const pieData = {
    options: {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Salary', 'Credit', 'Utility bills', 'Food', 'Fuel', 'Other', 'Vacation'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
};

const areaChart = {
    options: {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
};

export default function Statistic() {
    const [seriesData, setSeriesData] = useState([]);
    const [optionData, setOptionData] = useState(pieData.options);
    const [areaData, setAreaData] = useState(areaChart);
    const [areaSeries, setAreaSeries] = useState([]);

    useEffect(() => {
        walletService.getTransaction().then((data) => {
            const formatedObject = fillDataObject(data.results);
            setSeriesData(Object.values(formatedObject.pieResult));
            setOptionData((state) => ({
                ...state,
                labels: Object.keys(formatedObject.pieResult)
            }));
            setAreaSeries(formatedObject.areaResult);
            setAreaData(state => ({
                ...state,
                xaxis: {
                    type: 'datetime',
                    categories: formatedObject.areaDates
                }
            }))
        })
    }, []);

    const fillDataObject = (data) => {
        const pieResult = {
            'Salary': 0,
            'Credit': 0,
            'Utility bills': 0,
            'Food': 0,
            'Fuel': 0,
            'Vacation': 0,
            'Other': 0
        };

        const areaResult = [
            { name: 'income', data: [] },
            { name: 'outgoing', data: [] }
        ];

        const areaDates = [];

        data.forEach(record => {
            switch (record['label']) {
                case 'salary': pieResult['Salary'] += record.amount; break;
                case 'credit': pieResult['Credit'] += record.amount; break;
                case 'utilityBills': pieResult['Utility bills'] += record.amount; break;
                case 'food': pieResult['Food'] += record.amount; break;
                case 'fuel': pieResult['Fuel'] += record.amount; break;
                case 'vacation': pieResult['Vacation'] += record.amount; break;
                case 'other': pieResult['Other'] += record.amount; break;
            };

            switch (record['operationType']) {
                case 'income':
                    areaResult[0].data.push(record.amount);
                    areaDates.push(new Date(record.date).toDateString());
                    break
                case 'outgoing':
                    areaResult[1].data.push(record.amount);
                    areaDates.push(new Date(record.date).toDateString());
                    break
            }
        });
        return { pieResult, areaResult, areaDates };
    };

    return (
        <div id="chart">
            <ReactApexChart style={{ marginLeft: '30%', marginTop: '10%' }} options={optionData} series={seriesData} type="pie" width={380} />
            <br></br>
            <ReactApexChart options={areaData} series={areaSeries} type="area" height={350} />
        </div>
    );
};