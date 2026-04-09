import React, { useState, useEffect, useContext } from "react";
import History from "./History";
import "./Add.css";
import { info } from "./index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Add = () => {
  // this is temporary and we need a second array.
  const { addtransaction, setaddtransaction } = useContext(info);
  const { addtransactions, setaddtransactions } = useContext(info);

  const handlechange = (e) => {
    if (e.target.name === "amount" && e.target.value.length > 21) return;

    setaddtransaction({
      ...addtransaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleadd = () => {
    if (
      addtransaction.title.trim() === "" ||
      addtransaction.amount.trim() === "" ||
      addtransaction.type.trim() === "" ||
      addtransaction.date === ""
    ) {
      console.log("input is empty");
      return;
    }
    setaddtransactions([...addtransactions, addtransaction]);
    console.log(addtransactions);

    setaddtransaction({
      ...addtransaction,
      title: "",
      amount: "",
      date: "",
    });
  };

  useEffect(() => {
    console.log(addtransactions);
  }, [addtransactions]);

  return (
    <div>
      <div id="add-parent">
        <div className="intro">
          <h1 id="heading-1">Add Transaction</h1>
        </div>
        <div className="input-boxes">
          <div className="box1">
            <h2>type</h2>
            <select
              id="type"
              name="type"
              value={addtransaction.type}
              onChange={handlechange}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>{" "}
          {/* box 1 div */}
          <div className="box2">
            <h2>Title</h2>
            <input
              name="title"
              value={addtransaction.title}
              onChange={handlechange}
              type="text"
              placeholder="Enter Title.."
            />
          </div>{" "}
          {/* box 2 div */}
          <div className="box3">
            <h2>Amount</h2>
            <input
              name="amount"
              value={addtransaction.amount}
              onChange={handlechange}
              type="number"
              placeholder="Enter Amount"
            />
          </div>{" "}
          {/* box 3 div */}
          <div className="box4">
            <h2>Date</h2>
            <DatePicker
              id="datepicker"
              onChange={(newDate) =>
                setaddtransaction((prev) => ({
                  ...prev,
                  date: newDate.toISOString(),
                }))
              }
              selected={addtransaction.date}
              dateFormat={"dd/MM/yyyy"}
              showPopperArrow={false}
              placeholderText="dd/MM/yyyy"
              popperPlacement="bottom-start"
              closeOnScroll={true}
            />
          </div>{" "}
          {/* box 4 div */}
        </div>{" "}
        {/* input-boxes */}
        <div className="add-btn">
          <button onClick={handleadd} id="add">
            Add Transaction{" "}
          </button>
        </div>
      </div>{" "}
      {/* add parent div */}
    </div>
  );
};

export default Add;
