import React,{useState, useEffect} from "react";
import Autocomplete from "../input/Autocomplete";
import Input from "../input/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
export default function CardBarChart() {
  const [first, setFirst] = useState("USD");
  const [second, setSecond] = useState("NGN");
  const [exchange, setExchange] = useState(0);
  const [firstInput, setFirstInput] = useState(0)
  const [secondInput, setSecondInput] = useState(0)
  const {
    isLoading,
    isError,
    isSuccess,
    data: exchangeData,
  } = useQuery(["getRate", exchange], () => fetchPost(first, second), {
    enabled: !!exchange,
  });

  async function fetchPost(first, second) {
    const request = await axios.get(`/.netlify/functions/subtitles?second=${second}&first=${first}`)
    return request
  }

  useEffect(() => {
    if(first && second){
      setExchange(exchange + 1)
    }
  }, [first, second])

  useEffect(()=>{
    if(isLoading){
      toast('getting data')
    } else if(isSuccess && exchangeData.data.status !== 'error'){
      toast.success('yayy it worked')
    } else if (isError){
      toast.error('sorry buddy there was an error with your data, try refreshing the page')
    } else if (isSuccess && exchangeData.data.status === 'error'){
      toast.error('sorry the currency pair you selected is not traded publicly please try a different pair')
    }
   },[isLoading, isError, isSuccess])
  return (
    <>
    
<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Currency converter
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative md:h-[250px] xl:h-[350px]">
          <div className="p-1 w-full sm:w-[90%] mx-auto flex flex-col">
                  <span>convert</span>
                  <div className="flex">
                  <Input loading={isLoading} success={isSuccess} error={isError} exchangeData={exchangeData} base inputState={firstInput} otherInputState={setSecondInput} changeThisState={setFirstInput}/>
                  <div className="min-w-[7em] sm:min-w-[8em] ml-2 md:ml-0 md:px-2 min-h-full">
                  <Autocomplete state={first} changeState={setFirst} noClear first/>
                  </div>
                  </div>
            </div>
            <div className="p-1 w-full sm:w-[90%] mx-auto flex flex-col">
                  <span>to</span>
                  <div className="flex">
                  <Input loading={isLoading} success={isSuccess} error={isError} exchangeData={exchangeData} inputState={secondInput} otherInputState={setFirstInput} changeThisState={setSecondInput}/>
                  <div className="min-w-[7em] sm:min-w-[8em] ml-2 md:ml-0 md:px-2 min-h-full">
                  <Autocomplete state={second} changeState={setSecond} noClear/>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
}
