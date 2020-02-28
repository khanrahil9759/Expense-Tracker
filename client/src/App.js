import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <Fragment>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses/>
          <TransactionList />
          <AddTransaction />
        </div>
      </Fragment>
    </GlobalProvider>
  );
}

export default App;
