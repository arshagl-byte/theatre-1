import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import MovieInfo from './MovieInfo';

function App() {
return (
<div>
<h1>Kerala Theatre Portal</h1>
<Welcome name="CDIPD Team" />
<MovieInfo title="Devadhoothan" language='Malayalam' rating={5}/>
<MovieInfo title="Ravanaprabhu" language='Malayalam' rating={5}/>
</div>
);
}
export default App;