import React from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {

    const [monthlyPayment, setMonthlyPayment] = React.useState(0);

    const houseValueRef = React.useRef();
    const savingsRef = React.useRef();
    const numYearsRef = React.useRef();
    const annualInterestRef = React.useRef();

    const calculateMonthPayment = (houseValue, savings, annualInterest, numYears) => {

        const numMonths = numYears * 12;
        const annualInterestDecimal = annualInterest / 100;
        const monthlyInterest = annualInterestDecimal / 12;
        const moneyToAsk = houseValue - savings;
        const divider = (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
        const monthPayment = moneyToAsk / divider;

        return monthPayment;
    }

    const changeInputValue = (ammount, ref) => {
        const currentValue = parseInt(ref.current.value)
        const newValue = currentValue + ammount;
        ref.current.value = newValue;
    }

    const changeInterestValue = (ammount) => {
        const currentValue = parseFloat(annualInterestRef.current.value);
        let newValue = currentValue + ammount;
        newValue = (Math.round(newValue * 100) / 100).toFixed(2);
        annualInterestRef.current.value = newValue;
    }

    const getVluesAndCalculateMonthlyPaynment = () => {

        const houseValue = houseValueRef.current.value;
        const savings = savingsRef.current.value;
        const annualInterest = annualInterestRef.current.value;
        const numYears = numYearsRef.current.value;

        const payment = calculateMonthPayment(houseValue, savings, annualInterest, numYears);
        setMonthlyPayment(payment);
    }

    return (
        <div className='mortgage-calculator'>
            <h2>Calculadora Hipotecas</h2>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce el valor de la casa:
                    <button onClick={() => changeInputValue(- 5000, houseValueRef)}>-</button>
                    <input ref={houseValueRef} defaultValue='300000' type="number" name="houseValue" id="houseValue" placeholder='300000'></input>
                    <button onClick={() => changeInputValue(+ 5000, houseValueRef)}>+</button>
                </label>
            </fieldset>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce los Ahorros aportados:
                    <button onClick={() => changeInputValue(- 1000, savingsRef)}>-</button>
                    <input ref={savingsRef} defaultValue='30000' type="number" name="savings" id="savings" placeholder='30000'></input>
                    <button onClick={() => changeInputValue(+ 1000, savingsRef)}>+</button>
                </label>
            </fieldset>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce el Plazo en años:
                    <button onClick={() => changeInputValue(- 1, numYearsRef)}>-</button>
                    <input ref={numYearsRef} defaultValue='30' type="number" name="numYears" id="numYears" placeholder='30'></input>
                    <button onClick={() => changeInputValue(+ 1, numYearsRef)}>+</button>
                </label>
            </fieldset>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce el interes de la hipoteca tipo fijo:
                    <button onClick={() => changeInterestValue(- 0.1)}>-</button>
                    <input ref={annualInterestRef} defaultValue='2.5' type="number" name="anualInterest" id="anualInterest" placeholder='2'></input>
                    <button onClick={() => changeInterestValue(+ 0.1)}>+</button>
                </label>
            </fieldset>

            <button onClick={getVluesAndCalculateMonthlyPaynment}>Calcular cuota mensual</button>
            <p>Tu cuota mensual será de :<strong>{monthlyPayment.toFixed(2)}</strong></p>

        </div>

    )
}

export default MortgageCalculator;