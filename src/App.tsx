
import './App.css'
import CurrencySelector from './components/CurrencySelector'
import LanguageSelector from './components/LanguageSelector'
import Banner from './components/Banner'
// import Demo from './components/demo'

function App() {
  

  return (
    <>
    <LanguageSelector></LanguageSelector>
    <br></br>
    <CurrencySelector></CurrencySelector>
      <Banner></Banner>
      {/* <Demo></Demo> */}
    </>
  )
}

export default App
