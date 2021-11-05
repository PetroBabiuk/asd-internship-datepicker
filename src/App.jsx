import { useState } from 'react';
import Datepicker from './components/Datepicker';
import RadioButtonsForm from './components/RadioButtonsForm';

const App = () => {
	const [date, setDate] = useState(null);
	const [type, setType] = useState(null);
	const [ranges, setRanges] = useState([1,2,3]);

	return (
		<div className='App'>
			<RadioButtonsForm
				onChange={(type) => setType(type)}
			/>
			{type === 'simple' && date &&
				<div className='inputs'>
					<input disabled value={date.toLocaleDateString()} />
				</div>
			}
			{type === 'range' && date &&
				<div className='inputs'>
					<input disabled value={date.toLocaleDateString()} />
					__
					<input disabled value={date.toLocaleDateString()} />
				</div>
			}
			{type === 'multirange' && date &&
				<>
					{ranges.map((range) => range ?
						<div className='inputs' key={range}>
							<input disabled value={date.toLocaleDateString()} />
							__
							<input disabled value={date.toLocaleDateString()} />
						</div>
						:
						<></>
					)}
				</>
			}
			<Datepicker
				onChange={(date) => setDate(date)}
				type={type}
			/>
		</div>
	);

}

export default App;