import {useState} from 'react';
import data from "./data.json";
import Jobs from "./components/Jobs";
import Header from "./components/Header";

function App() {
	const [filterKeywords, setfilterKeywords] = useState([]);

	const addFilterKeywords = (data) => {
		if(!filterKeywords.includes(data)){
			setfilterKeywords([...filterKeywords, data]);
			console.log(filterKeywords);
		}
	}

	const deleteKeyword = (data) => {
		const newKeywords = filterKeywords.filter((key) => key !== data);
		setfilterKeywords(newKeywords);
	}

	const clearAll = () => {
		setfilterKeywords([]);
	}

  return (
    <div>
      <div className="header"></div>
	  	{filterKeywords.length > 0 && <Header keywords = {filterKeywords} removeKeywords={deleteKeyword} clearAll = {clearAll} />}
      <Jobs keywords = {filterKeywords} data={data} setKeywords = {addFilterKeywords}/>
    </div>
  );
}

export default App;

/* import React from 'react';
import Home from './components/Home';

function App(props) {
	return (
		<Home />
	);
}

export default App;
 */