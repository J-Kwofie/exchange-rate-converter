import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../public/css/exchangeRate.scss'
import { getConversionRate, } from '../redux/features/currencies/currencySlice.js'
import { conversionNames } from './constantData.js'
import  converter from './converter.js'

const icons = {
    icon1: "url('https://img.icons8.com/material-outlined/24/000000/delete-sign.png') ",
    icon2: "url('https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png')"
}


function CurrencyConverter() {
    const dispatch = useDispatch()
    const fromInput = useRef(null)
    const fromDataList = useRef(null)
    const clickFrom = useRef(true);
    const toInput = useRef(null)
    const toDataList = useRef(null)
    const clickto = useRef(true);
    // conversionRate, conversionResult, isLoading, isError, message
    const { isSuccess,conversionResult, conversionRate ,message, timeLastUpdate} = useSelector((state) => state.currencies)

    const [formData, setFormData] = useState({ amount: 1, from: "GHS", to: "USD" })

    useEffect(() => {
        console.log("material-outlined")
    }, [])

    function handleOnFocusFrom() {
        fromDataList.current.style.display = 'block'
        fromInput.current.style.backgroundImage = icons.icon1
    }

    function handleOnBlurFrom() {


        fromDataList.current.style.display = 'none'
        fromInput.current.style.backgroundImage = icons.icon2;
        if (formData.from.length < 1) {
            setFormData((previousState) => ({ ...previousState, from: "GHS" }))

        }
    }

    function handleOnclickFrom() {
        fromInput.current.value = ''

        setFormData((previousState) => ({ ...previousState, from: '' }))
        if (fromDataList.current.style.display == "none") {
            console.log('mexm')
            console.log(fromInput.current.style.backgroundImage, clickFrom.current)

            if (clickFrom.current) {
                fromInput.current.style.backgroundImage = icons.icon2
                clickFrom.current = false;
            } else {
                fromInput.current.style.backgroundImage = icons.icon1
                clickFrom.current = true
            }

        }
        if (fromDataList.current.style.display == "block") {
            fromDataList.current.style.display = 'none'
            console.log('mex')

        }

    }

    function handleOnFocusTo() {
        toDataList.current.style.display = 'block'
        toInput.current.style.backgroundImage = icons.icon1
    }

    function handleOnBlurTo() {

        toDataList.current.style.display = 'none'
        toInput.current.style.backgroundImage = icons.icon2;
        console.log(formData.to.length)
        if (formData.to.length < 1) {
            setFormData((previousState) => ({ ...previousState, to: "USD" }))

        }

    }

    function handleOnclickTo() {

        setFormData((previousState) => ({ ...previousState, to: '' }))
        if (toDataList.current.style.display == "none") {
            console.log('mexm')

            console.log(toInput.current.style.backgroundImage, clickto.current)
            if (clickto.current) {
                toInput.current.style.backgroundImage = icons.icon2
                clickto.current = false;
            } else {
                toInput.current.style.backgroundImage = icons.icon1
                clickto.current = true
            }

        }
        if (toDataList.current.style.display == "block") {
            toDataList.current.style.display = 'none'
            console.log('mex')

        }

    }

    function handleOnChange() {
        setFormData((previousState) => ({
            ...previousState,
            [event.target.name]: event.target.value
        }))
    }

    function handleOnSubmit() {
        event.preventDefault();
        dispatch(getConversionRate(formData))

    }

    return (
        <section className="converter-section">
        <form onSubmit={handleOnSubmit}>
      <h2 id="form-title">CONVERTER</h2>

        <div id="form_wrapper">
        <div className="form-group" >
          <label htmlFor="amount">Amount</label>
          <input 
            type="text" 
            name="amount" 
            id="amount"  
            onChange={handleOnChange}
            value={formData.amount} required/>
        </div>

        <div className="form-group" >
            <label htmlFor='for'>From </label>
            <input 
                id="datalist-input-from" 
                type="text" placeholder="April" 
                className="icon"  
                list="fromList"
                name="from"
                required
                value={formData.from}
                onFocus={handleOnFocusFrom}
                onClick={handleOnclickFrom}
                onBlur={handleOnBlurFrom}
                onChange={handleOnChange}

                    ref={fromInput}
                //style={{'backgroundImage':datalistVisible.icon}}
                />
            {
                (
                <datalist id="fromList" ref={fromDataList}>
                        
                {
                    conversionNames.map((item)=>{
                        return <option value={item} key={item}> </option>

                    })
                }


                    </datalist>
    )
        }
            
        </div>


        <div className="form-group" >
            <label htmlFor='for'>To </label>
            <input 
                id="datalist-input-to" 
                name="to"
                type="text" placeholder="April" 
                className="icon" 
                required 
                value={formData.to}
                list="toList" 
                onChange={handleOnChange}
                onFocus={handleOnFocusTo}
                onClick={handleOnclickTo}
                onBlur={handleOnBlurTo}
                ref={toInput}
                />
            {
            (
                <datalist id="toList" ref={toDataList}>
                        {
                            conversionNames.map((item)=>{
                                return <option value={item} key={item}> </option>

                            })
                        }
                    </datalist>
            )
}
            
        </div>
        <button type="submit" id="convert">Convert</button>

        </div>

      </form>
                  
        { isSuccess?
            (<section className="conversion-wrapper">
                <div className="conversion-rate">
                    <h3>Conversion Rate </h3>
                    <div className="converter">
                    <div className="converter-wrapper"  >
                    <label id="conversion_rate"> 1 </label>

                    <label> {formData.from} = </label>
                    </div>
                    <div className="converter-wrapper" >
                    <label> {formData.to}</label>
                    <label id="conversion_rate"> {conversionRate }</label>
                    </div>
                    </div>

                    <div className="converter">
                    <div className="converter-wrapper" >
                    <label id="conversion_rate"> 1 </label>

                    <label> {formData.to} = </label>
                    </div>
                    <div className="converter-wrapper">
                    <label>{formData.from} </label>
                    <label id="conversion_rate"> {converter(conversionRate) }</label>
                    </div> 
                    </div>
                </div>
                <div className="conversion-result">
                    <h3>Conversion Result </h3>
                    <div className="converter">
                    <div className="converter-wrapper">
                    <label id="conversion_rate"> 1 </label>

                    <label> {formData.from} = </label>
                    </div>
                    <div className="converter-wrapper">
                    <label> {formData.to}</label>
                    <label id="conversion_rate"> {conversionResult }</label>
                    </div>
                    </div>
                </div>
                <div className="timeLastUpdate">
                  <label> {formData.from} to </label>
                  <label> {formData.to} — <span> Last updated </span></label>
                  <label id="conversion_last_update"> {timeLastUpdate }</label>

                </div>

            </section>):message
        }
     
      </section>
    )
}

export default CurrencyConverter