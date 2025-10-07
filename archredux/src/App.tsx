
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react'
import Page from './components/Page';

function App() {
  useEffect(()=>{
    document.title="Arch Redux";
  },[])
  return (
    <>
      <BrowserRouter basename='/'>
          <Page/>
      </BrowserRouter>
      {/* <h1>Hello World</h1> */}
    </>
  )
}

export default App
