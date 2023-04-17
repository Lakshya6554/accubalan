import React from "react";
import ExpenseHome from "./expensehome";
const Expensetracker = () => {
  return (
    <div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1.9rem",
          color: "white",
          backgroundColor: "#565387",
          borderRadius: "20px",
          marginLeft: "130px",
          marginRight: "130px",
        }}
      >
        Expense Tracker
      </span>
      <div className="container">
        <ExpenseHome />
      </div>
    </div>
  );
};

export default Expensetracker;
