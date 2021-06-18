import React, { useState } from 'react';
import './App.css';
import Person from './Person';

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

      <Person
        name="Sudha"
        birthDat={new Date('2020-10-01')}
        birthLocation={{ latitude: '20W', longitude: '30E', height: 200 }}
      />
    </div>
  );
}

export default App;
