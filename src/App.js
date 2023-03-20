
import './App.css';
import ImageSlider from './components/ImageSlider';
import SliderData from './components/SliderData';
import { GlobalProvider } from './context/GlobalState';
import AddTransaction from './Expense Tracker/AddTransaction';
import Balance from './Expense Tracker/Balance';
import Header from './Expense Tracker/Header';
import IncomeExpenses from './Expense Tracker/IncomeExpenses';
import Transaction from './Expense Tracker/TransactionList';



function App() {
  return (
    <>

      {/* <ImageSlider slides={SliderData} /> */}

      <GlobalProvider>

        <Header />

        <Balance />

        <IncomeExpenses />

        <Transaction />

        <AddTransaction />

      </GlobalProvider>

    </>
  );
}

export default App;
