import {useRef, useState} from "react";
import TransactionRow from "./transactionRow.jsx";

function Transactions() {
    const data = [
        { id: 1, date: "June 20th, 2020", description: "Golden Sun Bakery", amount: "$5.00", balance: "$2082.79", type: "Electronic", category: "Food" },
        { id: 2, date: "June 20th, 2020", description: "Golden Sun Bakery", amount: "$10.00", balance: "$2087.79", type: "Electronic", category: "Food"},
    ];
    function toggleRow(row) {
        row.classList.toggle("active");
    }
    return (
        <main className="main bg-dark">
            <section className="header">
                <p>Label</p>
                <p>Money</p>
                <p>Available Balance</p>
            </section>
            <section className="content">
                <div className="table">
                    <div className="table-header">
                        <div className="table-cell">DATE</div>
                        <div className="table-cell">DESCRIPTION</div>
                        <div className="table-cell">AMOUNT</div>
                        <div className="table-cell">BALANCE</div>
                    </div>
                    {data.map((item) => (
                        <TransactionRow key={item.id} transaction={item}/>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Transactions
