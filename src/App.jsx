import { useState } from 'react';
import Datepicker from './components/Datepicker';
import RadioButtonsForm from './components/RadioButtonsForm';

const App = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null)
	const [type, setType] = useState('simple');
	const [ranges, setRanges] = useState([1, 2, 3]);
	
	const handleChange = (startDate, endDate) => {
		if (type === 'simple') {
			setStartDate(startDate);
		}
		if (type === 'range') {
			if (startDate && endDate && startDate.getTime() > endDate.getTime()) {
				setStartDate(endDate);
				setEndDate(startDate);
			} else {
				setStartDate(startDate);
				setEndDate(endDate);
			}
		}
	}

	return (
		<div className='App'>
			<RadioButtonsForm
				onChange={(type) => setType(type)}
			/>

			{type === 'simple' && 
				<div className='inputs'>
					{startDate
					? <input disabled value={startDate.toLocaleDateString()} />
					: <input disabled value='--.--.----' />}
				</div>
			}

			{type === 'range' &&  
				<div className='inputs'>
				{startDate
					? <input disabled value={startDate.toLocaleDateString()} />
					: <input disabled value='--.--.----' />}
					__
				{endDate
					? <input disabled value={endDate.toLocaleDateString()} />
					: <input disabled value='--.--.----' />}
				</div>
			}

			{type === 'multirange' && startDate &&
				<>
					{ranges.map((range) => range ?
						<div className='inputs' key={range}>
							<input disabled value={startDate.toLocaleDateString()} />
							__
							<input disabled value={startDate.toLocaleDateString()} />
						</div>
						:
						<></>
					)}
				</>
			}

			<Datepicker
				onChange={(startDate, endDate) => handleChange(startDate, endDate)}
				type={type}
			/>

		</div>
	);

}

export default App;