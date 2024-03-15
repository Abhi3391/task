
import './App.css'
import CurrencySelector from './components/CurrencySelector'
import LanguageSelector from './components/LanguageSelector'
import Banner from './components/Banner'
import NewsLetter from './components/Newsletter'
import CoinTable from  './components/CoinPriceTable'
import CoinCard from  './components/CoinPriceCard'

function App() {

  

  return (
    <>
    <LanguageSelector></LanguageSelector>
    <br></br>
    <CurrencySelector></CurrencySelector>
    <br></br>
      <CoinCard></CoinCard>
    <br></br>
      <CoinTable></CoinTable>
      <br></br>
      <NewsLetter></NewsLetter>
      <br></br>
      <Banner></Banner>
    </>
  )
}

export default App
