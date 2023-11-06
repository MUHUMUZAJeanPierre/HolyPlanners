import styles from './Dashboardmain.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import Startcard from '../Startcard/Startcard';
//pie chart
import { ArcElement, } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




const Dashboardmain = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tour Booking',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept', 'Oct', "Nov", 'Dec'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [20,43,10,54,8,23,40, 89, 20, 67, 70, 99],
        backgroundColor: '#c29D59',
      },
      {
        label: 'Dataset 2',
        data: [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  //pie chart 
const piedata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <div className={styles.chart}>
      <Startcard amount="200" props = "Tours"/>
      <Startcard amount="2200" props = "Booking"/>
      <Startcard amount ="100" props = "Users"/>
    <div className={styles.chartBox}>
      <div  className={styles.bar}>
        <Bar options={options} data={data}  className={styles.barChart}/>
      </div>
      <div className={styles.pie}>
        <Pie  data={piedata} />;
      </div>

    </div>

    </div>
  
  ) 
}






export default Dashboardmain