import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-blue-800 font-semibold text-xl">Obfuscate test</h1>
			<div className="p-4 w-fit h-full rounded-lg shadow bg-red-400 md:bg-blue-400 m-4">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
