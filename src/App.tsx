
import './App.css'
import CurrencySelector from './components/CurrencySelector'
import LanguageSelector from './components/LanguageSelector'
import Banner from './components/Banner'
import NewsLetter from './components/Newsletter'
import CoinTable from  './components/CoinPriceTable'

function App() {
  

  return (
    <>
    <LanguageSelector></LanguageSelector>
    <br></br>
    <CurrencySelector></CurrencySelector>
    <br></br>
    <br></br>
      <CoinTable></CoinTable>
      <NewsLetter></NewsLetter>
      <br></br>
      <Banner></Banner>
    </>
  )
}

export default App
