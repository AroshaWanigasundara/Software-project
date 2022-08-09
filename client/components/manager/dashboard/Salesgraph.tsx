import React from 'react'
import styles from './styles.module.scss'
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

interface SalesgraphProps {

}

const Salesgraph: React.FC<SalesgraphProps> = ({}) => {
    const UserData = [
        {
          id: 1,
          year: 'By Bid',
          userLost: 823,
        },
        {
          id: 2,
          year: 'Direct Buy',
          userLost: 345,
        },
        {
          id: 3,
          year: 'Old Bid',
          userLost: 555,
        }
    ];
    const [userData, setUserData] = React.useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "System Transaction in Last Seven Days",
            data: UserData.map((data) => data.userLost),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
            borderColor: "black",
            borderWidth: 2,
            lineTension: 0.4
          },
        ],
      });
    return (
        <div className={styles.pichartbg}>
            <Doughnut data={userData}/>
        </div>
    );
}

export default Salesgraph;