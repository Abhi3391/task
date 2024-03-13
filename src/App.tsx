
import './App.css'
import CurrencySelector from './components/CurrencySelector'
import LanguageSelector from './components/LanguageSelector'
import Banner from './components/Banner'
import NewsLetter from './components/Newsletter'

function App() {
  

  return (
    <>
    <LanguageSelector></LanguageSelector>
    <br></br>
    <CurrencySelector></CurrencySelector>
    <br></br>
      <Banner></Banner>
    <br></br>
      <NewsLetter></NewsLetter>
      
    </>
  )
}

export default App
