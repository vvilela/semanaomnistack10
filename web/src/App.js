import React, { useState } from 'react';

// component - function returning html, css or js that don't impact with the app
// property- informations that a parent componente pass to child
// status - informations keep by component (remeber: imutability)



function App() {
	const [counter,setCounter] = useState(0);

	function incrementCounter(){
		setCounter(counter + 1);	
	}

  return (
	  <>
	  	<h1>Contador: {counter}</h1>
		<button onClick={incrementCounter}>Incrementar</button>
	  </>
  );
}

export default App;
