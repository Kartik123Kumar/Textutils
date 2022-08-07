import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

const showAlert = (messege, type)=>{
  setalert({
    msg : messege,
    type : type
  })
  setTimeout(() => {
    setalert(null);
  }, 1000);
}

// const removeBodyClassess= ()=>{
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-success');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-warning');
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
// }

  const toggleMode = ()=>{
    // removeBodyClassess();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor ='#01083b';
      showAlert("Dark mode has been Enabled", "success");

      //Change the title when Dark mode is on (But it does not provide good user Experiences)
      // document.title ="Textutils- Dark mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been Enabled", "success");

      //Change the title when the light mode is changed
      // document.title ="Textutils- Light mode"   
    }
  }

  return (
    <>
    {/* <Router> */}
<Navbar tittle ="TextUtils" aboutText="About Text" mode={mode} toggleMode = {toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
{/* <Routes> */}
          {/* <Route exact path="/about" element={ <About mode={mode} />}> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert ={showAlert} heading ="Enter the text to analyze" mode={mode}/>}> */}
          <TextForm showAlert ={showAlert} heading ="Enter the text to analyze" mode={mode}/>
          {/* </Route> 
        </Routes>   */}
</div>
{/* </Router> */}
</>
  );
}

export default App;
