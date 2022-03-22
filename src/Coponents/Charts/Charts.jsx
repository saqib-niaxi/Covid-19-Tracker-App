import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchData } from "../../api"; //there is some iiisue
import styles from "./Charts.module.css";

const Charts = () => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchData()); /// and there is issue

        }

        fetchAPI();
    }, []);
    const lineChart = (
        dailyData.length ? 
            (
                <line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }
                            , {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Infected',
                            borderColor: 'red',
                            BackgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true,
                        }
                        ]

                    }}
                />
            ) : null
    );


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;