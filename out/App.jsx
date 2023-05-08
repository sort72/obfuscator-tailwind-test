import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="msy-text-blue-800 msy-font-semibold msy-text-xl">Obfuscate test</h1>
			<div className="msy-p-4 msy-w-fit msy-h-full msy-rounded-lg msy-shadow msy-bg-red-400 msy-md\:bg-blue-400 msy-m-4">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
