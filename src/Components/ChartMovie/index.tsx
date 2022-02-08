
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartMovieProps {
  vote: number,
}

export const ChartMovie = ({ vote }: ChartMovieProps) => {
  const optionsChart: ApexOptions = {
    chart: {
      width: 100,
      height: 100,
      animations: {
        enabled: true,
        easing: 'easeinout',
      }
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50px',
          background: '#42246D',
        },
        track: {
          background: '#42246D',
          strokeWidth: '70%',
          opacity: 1,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            color: "#14FF00",
            fontSize: "20px",
            show: true,
            offsetY: 7,
            fontWeight: 700,
            fontFamily: "Roboto",
          }
        }
      },
    },
    fill: {
      colors: ['#14FF00'],
    },
    labels: ["Progress"]
  }

  return (
    <>
      <ReactApexChart options={optionsChart} series={[vote.toFixed(1).toString().replace('.', '')]} type="radialBar" width={100} height={150} />
    </>
  );
};
