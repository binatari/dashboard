import React, { Fragment } from 'react';
import data from '../../currency.js'
import Select from 'react-select';
const Autocomplete = ({changeState,noClear,first}) => {
    const customStyles = {
      //eacg key represents a component
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: 'black',
          backgroundColor: 'white',
          padding: 20,
        }),
        control: (provided) => ({
          // none of react-select's styles are passed to <Control />
          ...provided,
          width: '100%',
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

      const handleChange = (e) => {
        changeState(e.value)
      }
    
    return (
        <>
        <Fragment>
            <Select
          styles={customStyles}
          className="basic-single"
          defaultValue={first? data[140] : data[101] }
          isClearable={noClear ? false : true}
          isSearchable={true}
          name="cc"
          options={data}
          onChange={handleChange}
          placeholder='input'
        />
        </Fragment>
        </>
    )
}

export default Autocomplete
