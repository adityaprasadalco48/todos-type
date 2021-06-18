import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [name] = useState('Aditya');
  return (
    <div className="App">
      <header>
        Name : {name}
        <h1>
          &#34;if you are going to try go all the way. otherwise, don&apos;t
          even start.&#34;
        </h1>
      </header>
    </div>
  );
}

export default App;
