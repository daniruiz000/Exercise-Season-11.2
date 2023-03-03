import './Fieldset.css';

const Fieldset = (props) => {

    return (
        <fieldset className='mortgage-calculator_fieldset'>
            <label>
                {props.text}
                <input ref={props.ref} type="number" name={props.id} id={props.id} placeholder={props.placeholder}></input>
            </label>
        </fieldset>
    )
}

export default Fieldset;