//NOTE: in react, component names must start with a capital letter. React terats components with lowercase letters as DOM tags

import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    //Provider wraps all of the subtree that you want the context to be accessible to. These componenets of the subtree then need to consume the context via useContext
    <GlobalProvider>
      <Header></Header>
      <div className = "container">
        <Balance> </Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
