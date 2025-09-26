import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		let currentCount = 0;
		let oneSecond = 1000; // 1 second
		let tenMinutes = 600000; // 10 minutes

		const timer = setInterval(() => {
			if(currentCount === tenMinutes){
				// Reload the page every 10 minutes to prevent memory leaks
				window.location.reload();
				currentCount = 0;
			}else{
				// Update the timeString and dateString every second
				setNow(new Date());
				currentCount += oneSecond;
			}
		}, oneSecond);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' });
	const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

	return (
		<div className="clock-container">
			<img className="clock-logo" src="/TC-logo.svg" alt="Taylor County Logo" />
			<div className="clock-time">{timeString}</div>
			<div className="clock-date">{dateString}</div>
		</div>
	);
}

export default App;