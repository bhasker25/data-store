import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import DataTable from "components/table";

function App() {
	return (
		<div className="App">

			<DataTable />

			<footer style={{marginTop: "1000px"}}>
				<h2>Tasks to do</h2>
				<ol>
					<li>Develop a web application using ReactJS + TypeScript.</li>
					<li style={{color: "gray", textDecoration: "line-through"}}>Utilize Firebase Firestore as the chosen database.</li>
					<li style={{ color: "gray", textDecoration: "line-through" }}>User Interface Design: Implement the Material-UI (MUI) library for designing the user interface. 🎨</li>
					<li>Data Handling: Use provided mock Excel data for development and testing purposes.</li>
					<li>Create functionality for users to upload Excel data to Firebase Firestore. 📊</li>
					<li>Data Display: Display the uploaded data in a table format within the application. 📈</li>
					<li>
						Search Functionality:Include a search-by-name feature for easy data retrieval and filtering. 🔍
					</li>
				</ol>
			</footer>

		</div>
	);
}

export default App;
