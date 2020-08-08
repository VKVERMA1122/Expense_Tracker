import React from "react";
import "./styles.css";
import Header from "../componets/Header";
import Balance from "../componets/Balance";
import IncomeExpence from "../componets/incomeExpence";
import TransactionList from "../componets/TransactionList";
import AddTransaction from "../componets/AddTransaction";
import { GlobalProvider } from "../context/Sate";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
