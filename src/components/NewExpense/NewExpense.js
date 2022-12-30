// import React from 'react';
// import './NewExpense.css';
// import Expenseform from './Expenseform';

// function NewExpense(props){

//     const SaveExpenseDataHandler= (enteredExpenseData) => 
//     {
//         const  expenseData = {
//             ...enteredExpenseData,
//             id:Math.random.toString()
//         };

//         console.log(expenseData);

//         props.onAddExpense(expenseData);
//     };

//     return (
//         <div className="new-expense">
//                <Expenseform onSaveExpenseData = {SaveExpenseDataHandler}/>
//         </div>
//     )
// }

// export default NewExpense;


import React, { useState } from 'react';

import ExpenseForm from './Expenseform';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;


