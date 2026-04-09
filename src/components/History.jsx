import React from "react";
import "./History.css";
import { useContext, useState } from "react";
import { info } from "./index";
const History = () => {
  const [filter, setfilter] = useState("all");
  const {
    addtransactions,
    setaddtransactions,
    addtransaction,
    setaddtransaction,
  } = useContext(info);

  let filteredData = addtransactions.filter((item) => {
    if (filter === "all") {
      return true;
    } else if (filter === "income") {
      return item.type === "income";
    } else if (filter === "expense") {
      return item.type === "expense";
    }
  });
  console.log(filteredData);

  // true = keeps   , false = remove
  const handleDelete = (index) => {
    const newitem = addtransactions.filter((item, i) => {
      return i !== index;
    });
    setaddtransactions(newitem);
  };

  const handleEdit = (index) => {
    setaddtransaction(addtransactions[index]);
    const newedit = addtransactions.filter((item, i) => i !== index);
    setaddtransactions(newedit);
  };

  return (
    <div>
      <div className="history-container">
        <h2 id="recent">Recent Transactions</h2>
        <div className="separation"></div>
        <div className="buttons">
          <button
            onClick={() => setfilter("all")}
            style={{
              background:
                filter === "all"
                  ? "linear-gradient(135deg, #020617, #1e293b, #1e40af)"
                  : "#e0e6ec",
              color: filter === "all" ? "white" : "black",
            }}
            id="All"
          >
            All
          </button>
          <button
            onClick={() => setfilter("income")}
            style={{
              background:
                filter === "income"
                  ? "linear-gradient(135deg, #020617, #1e293b, #1e40af)"
                  : "#e0e6ec",
              color: filter === "income" ? "white" : "black",
            }}
            id="history-btn"
          >
            Income
          </button>
          <button
            onClick={() => setfilter("expense")}
            style={{
              background:
                filter === "expense"
                  ? "linear-gradient(135deg, #020617, #1e293b, #1e40af)"
                  : "#e0e6ec",
              color: filter === "expense" ? "white" : "black",
            }}
            id="history-btn"
          >
            Expense
          </button>
        </div>{" "}
        {/* buttons div */}
        <div className="results">
          {filteredData.length === 0 ? (
            <p id="empty">
              No transactions yet. Add your first transaction above!
            </p>
          ) : (
            filteredData.map(
              (item, index /* item here is one element of array */) => (
                <div
                  id="pc"
                  style={{
                    borderLeft:
                      item.type === "income"
                        ? "5px solid green"
                        : "5px solid red",
                  }}
                  key={index}
                >
                  <div className="section-1">
                    <p id="date">{new Date(item.date).toLocaleDateString()}</p>
                    <p id="title">{item.title}</p>
                  </div>{" "}
                  {/* section1  div */}
                  <div className="section-2">
                    <p
                      id="amount"
                      style={{
                        color: item.type === "income" ? "#3bc073" : "#e97070 ",
                      }}
                    >
                      {item.type === "income" ? "+" : "-"}${item.amount}
                    </p>

                    <svg
                      id="delete-btn"
                      onClick={() => handleDelete(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>

                    <svg
                      id="edit"
                      onClick={() => handleEdit(index)}
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        stroke="#4299e1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        stroke="#4299e1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>{" "}
                  {/* section 2 div */}
                  {/* pc div */}
                </div>
              ),
            )
          )}
        </div>{" "}
        {/* result containers */}
      </div>{" "}
      {/* history div */}
    </div>
  );
};

export default History;
