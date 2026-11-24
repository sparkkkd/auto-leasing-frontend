import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path='/' element={<h1 className='text-3xl'>Hello</h1>} />
		</Routes>
	)
}

export default App
