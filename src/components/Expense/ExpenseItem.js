// import React, {useState} from "react";
// import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
// import './ExpenseItem.css';

// function ExpenseItem(props) {
     

//         const [title, setTitle] = useState(props.title);
//       const clickHandler = () =>
//       {
//             setTitle('updated');
//             console.log("clicked!!!");
//       }
//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//         <button onClick={clickHandler}>changed Title</button>
//       </div>
//     </Card>
//   );
// }

// export default ExpenseItem;

import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;