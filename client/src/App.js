import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthForm from './components/AuthForm';
import NavBar from './components/NavBar';
import LoadingComp from './components/LoadingComp';

function App() {
  console.log(process.env.PUBLIC_URL)
  const [clickOn, setClickOn] = React.useState(false)
  console.log(clickOn)
  return (
    <div className="App" id="app">
      <section>
        <NavBar clickOnSet={setClickOn}></NavBar>
        {clickOn ? <AuthForm /> : <LoadingComp />}
      </section>
    </div>
  );
}

export default App;
