import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Autocomplete from "../input/Autocomplete";
import PurpleSpinner from "../spinner/PurpleSpinner";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import toast from "react-hot-toast";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CardLineChart() {
  const [exchange, setExchange] = useState(0);
  const [chartData, setChartData] = useState({ labels: ['january','february','march'],
    datasets: [
      {
        id: 1,
        label: new Date().getFullYear(),
        backgroundColor: "#4c51bf",
        borderColor: "#4c51bf",
        tension: 0.3,
        data: [1,2,3,4,5],
        fill: false,
      }
    ],})
  const [first, setFirst] = useState("USD");
  const [second, setSecond] = useState("NGN");
  const {
    isLoading,
    isError,
    isSuccess,
    data: exchangeData,
  } = useQuery(["getExchange", exchange], () => fetchPost(first, second), {
    enabled: !!exchange,
  });

  async function fetchPost(first, second) {
    const request = await axios.get(`/.netlify/functions/youtube?second=${second}&first=${first}`)
    return request
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Currency history chart",
        fontColor: "white",
      },
      legend: {
        labels: {
          fontColor: "white",
        },
        align: "end",
        position: "bottom",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white",
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white",
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const go = []
  const d = new Date()
   months.forEach((month, i)=>{
     if(d.getMonth() - i < 0){
       go.push(months[12 + (d.getMonth() - i)])
     }
     else if (d.getMonth() - i >= 0){go.push(months[d.getMonth() - i])}
  })

useEffect(() => {
  if (exchangeData && exchangeData.data.status !== 'error'){
  let filteredArr;
  filteredArr = exchangeData.data.values.reverse().map((item)=>{
   return item.close
  })
  setChartData ({
    labels: go.reverse(),
    datasets: [
      {
        id: 1,
        label: new Date().getFullYear(),
        backgroundColor: "#4c51bf",
        borderColor: "#4c51bf",
        tension: 0.3,
        data: filteredArr,
        fill: false,
      }
    ],
  });
} else if (exchangeData && exchangeData.data.status === 'error') {
  toast.error('sorry the currency pair you selected is not traded publicly please try a different pair')
  return ( <div className="fixed top-0 right-28 text-5xl">there was an error</div> )
}
}, [exchangeData, isSuccess])

/*const handleChange = () => {
  const firstInput = data.some(item=>item.value===first)
  const secondInput = data.some(item=>item.value===second)
  firstInput && secondInput ? setExchange(exchange + 1) : console.log('your input is invalid')
}*/

 useEffect(()=>{
  if(isLoading){
    toast('getting data')
  } else if(isSuccess){
    toast.success('yayy it worked')
  } else if (isError){
    toast.error('sorry buddy there was an error with your data, try refreshing the page')
  }
 },[isLoading, isError, isSuccess])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center flex-col md:flex-row">
            <div className="relative w-full md:w-3/12">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className=" text-xl font-semibold">Currency History</h2>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center flex-grow flex-1">
              <form className="flex w-full md:w-3/5 ">
                <div className="p-1 w-1/2">
                  <span>from</span>
                  <Autocomplete state={first} changeState={setFirst} first/>
                </div>
                <div className="p-1 w-1/2">
                  <span>to</span>
                  <Autocomplete state={second} changeState={setSecond} />
                </div>
              </form>
              <button
                className="self-center mt-2 md:mt-0 md:self-end bg-indigo-500 px-4 md:ml-4 rounded md:mb-1 text-white py-2"
                onClick={() => setExchange(exchange + 1)}
              >
                View History
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className={`relative h-[350px] ${isLoading && 'flex items-center justify-center'}`}>
            {
              isLoading ? (<div className='w-20 flex items-center justify-center'><PurpleSpinner/></div>) : isError ? ( <div>sorry there was an error</div> ) : 
            (<Line options={options} data={chartData} datasetIdKey="id"/>)
            }
          </div>
        </div>
      </div>
    </>
  );
}
