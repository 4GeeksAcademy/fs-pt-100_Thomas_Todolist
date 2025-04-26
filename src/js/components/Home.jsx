import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	const handleSubmit = e => {
		e.preventDefault();
		if (inputValue !== "") {
			setTodos([...todos, inputValue]);
			setInputValue("");
		}
	}

	const deleteTodo = (todoIndex) => {
		const newTodos = todos.filter((_, index) => index !== todoIndex);
		setTodos(newTodos);
	}

	return (
		<div className="container col-6">
			<h1 className="my-3">My Dynamic To-Do List</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="form-control"
					type="text"
					name="input"
					placeholder="What do you need to do?"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
			</form>
			<h6 className="mt-4 text-center">Pending tasks:</h6>
			<ul className="list-group">
				{todos.map((todoItem, index) => (
					<li key={index} className="list-group-item">
						<div className="d-flex justify-content-between align-items-center">
							<p>{todoItem}</p>
							<span className="fas fa-trash" onClick={() => deleteTodo(index)}></span>
						</div>
					</li>
				))}
			</ul>
			<p className="text-center">Tasks to do: {todos.length}</p>
		</div>
	);

};

export default Home;