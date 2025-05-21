import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisplay = false,
    currencyDisable = false,  

    className = "",
}) {
    return (
        <>
            <label htmlFor="input-box">
                {label}
            </label>
            <input 
                type="number" 
                placeholder="0.00"
                disabled={amountDisplay}
                value={amount}
                onChange={(e) => onAmountChange && 
                    onAmountChange(Number(e.target.value))}
            />
            <p>
                Currency Type
            </p>
            <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange &&
                    onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </>
    )
} 


export default InputBox