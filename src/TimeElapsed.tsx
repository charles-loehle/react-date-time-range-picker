// pages/TimeElapsed.tsx
import React, { useState } from 'react';
import DatePickerRange from './DatePickerRange';

const TimeElapsed: React.FC = () => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);
	const [elapsedTime, setElapsedTime] = useState<string>('');

	const calculateTimeElapsed = () => {
		if (startDate && endDate) {
			const elapsedTimeInMilliseconds = endDate.getTime() - startDate.getTime();
			const hours = Math.floor(elapsedTimeInMilliseconds / 3600000);
			const minutes = Math.floor((elapsedTimeInMilliseconds % 3600000) / 60000);
			setElapsedTime(`${hours} hours and ${minutes} minutes`);
		} else {
			setElapsedTime('');
		}
	};

	return (
		<div>
			<h1>Datepicker Range</h1>
			<h2>Calculate Time Elapsed</h2>
			<div>
				<p>Select a start date and time:</p>
				<DatePickerRange
					selectedDate={startDate}
					onDateChange={date => setStartDate(date)}
				/>
			</div>
			<div>
				<p>Select an end date and time:</p>
				<DatePickerRange
					selectedDate={endDate}
					onDateChange={date => setEndDate(date)}
				/>
			</div>
			<button onClick={calculateTimeElapsed}>Calculate</button>
			{elapsedTime && (
				<div>
					<p>Time Elapsed:</p>
					<p>{elapsedTime}</p>
				</div>
			)}
		</div>
	);
};

export default TimeElapsed;
