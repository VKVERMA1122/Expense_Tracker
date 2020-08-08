import React, { useContext } from "react";
import { GlobalContext } from "../context/Sate";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const sign = transactions.amount < 0 ? "-" : "+";
  console.log("am", sign);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus" key={transaction.id}>
            {transaction.text}
            <span>
              {sign}
              {Math.abs(transaction.amount)}
            </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
