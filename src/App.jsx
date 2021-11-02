import { useState } from 'react';
import Datepicker from './components/Datepicker';

const App = () => {
	const [date, setDate] = useState(null);

	return (
		<div className='App'>
			{date &&
				<div className='inputs'>
					<input disabled  value={date.toLocaleDateString()} />
					{/* __ */}
					{/* <input disabled value={date.toLocaleDateString()} /> */}
				</div>
			} 
			<Datepicker
				onChange={(date) => setDate(date)}
			/>
		</div>
	);

}

export default App;