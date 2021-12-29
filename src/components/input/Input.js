
const Input = ({loading, success, error, exchangeData, base, inputState, otherInputState, changeThisState}) => {
  const handleChange = (e) => {
    if (base){
       changeThisState(e.value)
       otherInputState(parseInt(exchangeData.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*e.target.value)
    } else {
      changeThisState(e.value)
      otherInputState(e.target.value/parseInt(exchangeData.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]))
    }
  }
    return (
        <>
        <form className="flex bg-white rounded flex-wrap justify-between min-h-[38px] outline-none items-center border-2 border-gray-500">
          <input type="number" className="w-full appearance-none py-[0.4em] px-2" onChange={handleChange} value={inputState}/> 
        </form>
        </>
    )
}

export default Input
