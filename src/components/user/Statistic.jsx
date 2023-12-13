import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { walletService } from "../../services/walletService";

const charData = {
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

export default function Statistic() {
    const [seriesData, setSeriesData] = useState([]);
    const [optionData, setOptionData] = useState(charData.options);

    useEffect(() => {
        walletService.getTransaction().then((data) => {
            const formatedObject = fillDataObject(data.results);
            setSeriesData(Object.values(formatedObject));
            setOptionData((state) => ({
                ...state,
                labels: Object.keys(formatedObject)
            }))
        })
    }, []);

    const fillDataObject = (data) => {
        const result = {
            'Salary': 0,
            'Credit': 0,
            'Utility bills': 0,
            'Food': 0,
            'Fuel': 0,
            'Vacation': 0,
            'Other': 0
        };

        data.forEach(record => {
            switch (record['label']) {
                case 'salary': result['Salary'] += record.amount; break;
                case 'credit': result['Credit'] += record.amount; break;
                case 'utilityBills': result['Utility bills'] += record.amount; break;
                case 'food': result['Food'] += record.amount; break;
                case 'fuel': result['Fuel'] += record.amount; break;
                case 'vacation': result['Vacation'] += record.amount; break;
                case 'other': result['Other'] += record.amount; break;
            };
        });
        return result;
    }

    return (
        <div id="chart">
            {console.log(seriesData)}
            <ReactApexChart style={{ marginLeft: '30%', marginTop: '10%' }} options={optionData} series={seriesData} type="pie" width={380} />
        </div>
    )
}