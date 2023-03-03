import React from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {

    const[monthlyPayment, setMonthlyPayment] = React.useState(0);

    const houseValueRef = React.useState(0)
    const savingsRef = React.useState(0)
    const numYearsRef = React.useState(0)
    const annualInterestRef = React.useState(0)

    const getVluesAndCalculateMonthlyPaynment = ()=>{

        const houseValue = houseValueRef.current.value;
        const savings = savingsRef.current.value;
        const annualInterest = annualInterestRef.current.value;
        const numYears = numYearsRef.current.value;

        const payment = calculateMonthPayment(houseValue, savings, annualInterest, numYears);
        setMonthlyPayment(payment);
    }

    const calculateMonthPayment = (houseValue, savings, annualInterest, numYears) => {

        const numMonths = numYears * 12;
        const annualInterestDecimal = annualInterest / 100;
        const monthlyInterest = annualInterestDecimal / 12;
        const moneyToAsk = houseValue - savings;
        const divider = (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
        const monthPayment = moneyToAsk / divider;

        return monthPayment;
    }

    return (
        <div className='mortgage-calculator'>
            <h2>Calculadora Hipotecas</h2>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce el valor de la casa: 
                    <input ref= {houseValueRef} type="number" name="houseValue" id="houseValue" placeholder='300000'></input>
                </label>
            </fieldset>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce los Ahorros aportados:
                    <input ref= {savingsRef} type="number" name="savings" id="savings" placeholder='30000'></input>
                </label>
            </fieldset>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce el Plazo en años:
                    <input ref= {numYearsRef} type="number" name="numYears" id="numYears" placeholder='30'></input>
                </label>
            </fieldset>
            <fieldset className='mortgage-calculator_fieldset'>
                <label>
                    Introduce el interes de la hipoteca tipo fijo:
                    <input ref= {annualInterestRef} type="number" name="anualInterest" id="anualInterest" placeholder='2'></input>
                </label>
            </fieldset>

            <button onClick = {getVluesAndCalculateMonthlyPaynment}>Calcular cuota mensual</button>
            <p>Tu cuota mensual será de :<strong>{monthlyPayment}</strong></p>

        </div>

    )
}

export default MortgageCalculator;