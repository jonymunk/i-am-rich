import './App.css';
import { useState } from 'react';
import BallButton from './components/BallButton.jsx'

function App() {
  const [LballNumber, setLballNumber] = useState(1);
  const [RballNumber, setRballNumber] = useState(2);

  function onLBallclicked(){
   setLballNumber(Math. floor (Math. random ()*5)+1)
  }
  function onRBallclicked(){
   setRballNumber(Math. floor (Math. random ()*5)+1)
  }
  // const onLButtonClicked = () =>{
  //    console.log("Button clicked");
  //    setLballNumber(5);
  //    console.log(LballNumber);
  //  }
  //  const onRButtonClicked = () =>{
  //     console.log("Button clicked");
  //     setRballNumber(5);
  //     console.log(RballNumber);
  //   }
  return (
    <div className="App">
      <header>baall</header>
      <main>
      <BallButton onClick={onRBallclicked} ballNumber={RballNumber}/>
      <BallButton onClick={onLBallclicked} ballNumber={LballNumber}/>

      </main>
    </div>
  );
}

export default App;
