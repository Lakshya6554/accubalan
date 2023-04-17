// import React, { useState } from "react";

// const AddTransactionView = (props) => {
//   const [amount, setAmount] = useState();

//   const [desc, setDesc] = useState();
//   const [type, setType] = useState("EXPENSE");
//   const addTransaction = () => {
//     props.addTransaction({ amount: Number(amount), desc, type, id: Date.now });
//     props.toggleAdd();
//   };
//   return (
//     <div className="addtrncontainer" isAdd={props.isAdd}>
//       <input
//         type="number"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <input
//         placeholder="Description"
//         value={desc}
//         onChange={(e) => setDesc(e.target.value)}
//       />
//       <div className="radiobox">
//         <input
//           type="radio"
//           id="expense"
//           name="type"
//           value="EXPENSE"
//           checked={type == "EXPENSE"}
//           onChange={(e) => setType(e.target.value)}
//         />
//         <label htmlFor="expense">EXPENSE</label>
//         <input
//           type="radio"
//           id="income"
//           name="type"
//           value="INCOME"
//           checked={type == "INCOME"}
//           onChange={(e) => setType(e.target.value)}
//         />
//         <label htmlFor="income">INCOME</label>
//       </div>
//       <button
//         className="add-btn"
//         onClick={() =>
//           props.addTransaction({
//             amount: Number(amount),
//             desc,
//             type,
//             id: Date.now,
//           })
//         }
//       >
//         Add Transaction
//       </button>
//     </div>
//   );
// };
// const ExpenseOverview = (props) => {
//   const [isAdd, toggleAdd] = useState(true);
//   return (
//     <div className="container1">
//       <div className="row1">
//         Balance: $10000
//         <button onClick={() => toggleAdd(!isAdd)} className="add-btn">
//           {isAdd ? "Cancel" : "Add"}
//         </button>
//       </div>
//       <AddTransactionView toggleAdd={toggleAdd} />
//     </div>
//   );
// };

// export default ExpenseOverview;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;
const AddTransactionContainer = styled.div`
  display: ${(props) => (props.isAddTxnVisible ? "flex" : "none")};
`;

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  return (
    <AddTransactionContainer
      className="addtrncontainer"
      isAddTxnVisible={props.isAddTxnVisible}
    >
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="radiobox">
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="Expense">Income</label>
      </div>

      <button
        className="add-btn"
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        Add Transaction
      </button>
    </AddTransactionContainer>
  );
};
const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  return (
    <div className="container">
      <div className="row1">
        Balance: ${props.income - props.expense}
        <button
          className="add-btn"
          onClick={() => toggleAddTXn((isVisible) => !isVisible)}
        >
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </button>
      </div>
      {isAddTxnVisible && (
        <AddTransactionView
          isAddTxnVisible={isAddTxnVisible}
          addTransaction={(payload) => {
            props.addTransaction(payload);
            toggleAddTXn((isVisible) => !isVisible);
          }}
        />
      )}
      <div className="expensecontainer">
        <ExpenseBox>
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </div>
    </div>
  );
};
export default OverViewComponent;
