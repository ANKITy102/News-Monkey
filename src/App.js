import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


const App = () => {


  const apiKey = process.env.REACT_APP_NEWS_API
  // state = {
  //   progress: 0
  // }
  const [progress, setProgressValue] = useState(0);
  const setProgress = (progress) => {
    // setState({ progress: progress })
    setProgressValue(progress)
  }

  return (
    <Router>

      <div>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        // height={3}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={6} country="in" category="general" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </div>
    </Router>
  )

}
export default App

