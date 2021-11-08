import PropTypes from 'prop-types';

const InputsForm = ({ type, start, end, ranges }) => {
    
    if (type === 'simple') {
        return (
            <div className='inputs'>
                <input disabled value={start} />        
            </div>
        );
    }
				
	if (type === 'range') {  
        return (
            <div className='inputs'>
                <input disabled value={start} />
                __
                <input disabled value={end} />
            </div>
        );
	}

    if (type === 'multirange') {
        return (
            <>
                {ranges.map((range) => range ?
                    <div className='inputs' key={range}>
                        <input disabled value={start} />
                        __
                        <input disabled value={start} />
                    </div>
                    :
                    <></>
                )}
            </>
        );
    }
}

InputsForm.propTypes = {
    type: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    ranges: PropTypes.array,
}

export default InputsForm;