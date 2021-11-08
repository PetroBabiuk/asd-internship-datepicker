import PropTypes from 'prop-types';

const RadioButtonsForm = ({ onChange }) => {

    const onChangeValue = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className='radiobuttons-form' onChange={(e) => onChangeValue(e)}>
            <label>
                <input
                    type="radio"
                    value="simple"
                    name="type"
                    defaultChecked
                />
                Simple
            </label>
            <label>
                <input
                    type="radio"
                    value="range"
                    name="type"
                />
                Range
            </label>
            <label>
                <input
                    type="radio"
                    value="multirange"
                    name="type"
                />
                Multirange
            </label>
        </div>
    );
}

RadioButtonsForm.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default RadioButtonsForm;