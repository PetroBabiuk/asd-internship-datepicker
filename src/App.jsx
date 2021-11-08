import { useState } from 'react';
import Datepicker from './components/Datepicker';
import RadioButtonsForm from './components/RadioButtonsForm';
import InputsForm from 'components/InputsForm';

const App = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null)
	const [type, setType] = useState('simple');
	const ranges = [1, 2, 3];
	
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
		if (type === 'multirange') {
		//	TODO:  додати логіку для мультирендж
		}
	}

	return (
		<div className='App'>
			<RadioButtonsForm
				onChange={(type) => setType(type)}
			/>

			<InputsForm
				type={type}
				start={startDate
					? startDate.toLocaleDateString()
					: '--.--.----'
				}
				end={endDate
					? endDate.toLocaleDateString()
					: '--.--.----'
				}
				ranges={ranges}
			/>

			<Datepicker
				onChange={(startDate, endDate) => handleChange(startDate, endDate)}
				type={type}
			/>

		</div>
	);

}

export default App;