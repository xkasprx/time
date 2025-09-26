import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setNow(new Date()), 1000); // Update every second
		const timer2 = setInterval(() => setNow(new Date()), 60000); // Force re-render every minute for date update
		const timer3 = setInterval(() => window.location.reload(), 600000); // Reload every 10 minutes
		return () => {
			clearInterval(timer);
			clearInterval(timer2);
			clearInterval(timer3);
		};
	}, []);

	const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
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