import React, { useState } from 'react';

function TransactionRow({ transaction }) {
    // [] Compléter le style desktop
    // [] Compléter le style responsive
    // [] Faire l'édition de note (text input) => useState
    // [] Faire l'édition de catégorie (liste de sélection) => useState
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="table-row" >
            <button className={`table-row-expandbtn ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>▾</button>
            <div className="table-cell">{transaction.date}</div>
            <div className="table-cell">{transaction.description}</div>
            <div className="table-cell">{transaction.amount}</div>
            <div className="table-cell">{transaction.balance}</div>
            {isExpanded && (
                <div className="table-row-details">
                    <p>Transaction Type: {transaction.type}</p>
                    <p>Category: {transaction.category} <span className="edit-icon">✏️</span></p>
                    <p>Notes: {transaction.notes} <span className="edit-icon">✏️</span></p>
                </div>
            )}
        </div>
    );
}
export default TransactionRow
