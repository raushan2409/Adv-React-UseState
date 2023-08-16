import React, { useState } from "react"


import './ExpenseForm.css'



const ExpenseForm = () => {
    // first time use state is mt bc nothing was entered
    // const [enteredtitle,setEnteredTitle] = useState("");
    // const [enteredAmount,setEnteredAmount] = useState("");
    // const [enteredDate,setEnteredDate] = useState("");
    // u can use one use state also by passing the object 
    const [userInput,setUserInput] =  useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });

    const titleChangeHandler = (event)=>{
        // console.log('Title.changed');
        // console.log(event);
        // console.log(event.target.value);
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput, //using spread operator
        //     enteredTitle:event.target.value,
        // })

        // it will receives the previous state(obj state)
        //if ur state updates depend on previos update use this function 
        setUserInput((prevState)=>{
            return {...prevState,enteredTitle:event.target.value}
        })
    };
    const amountChangeHandler = (event)=>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput, //for copy the other value so that we'll not loose them
            enteredAmount:event.target.value,
        })
    }
    const dateChangeHandler = (event)=>{
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput, 
            enteredDate:event.target.value,
        })
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2024-12-23" onChange={dateChangeHandler}/>
            </div>
        </div>
<div className="new-expense__actions">
    <button>Add Expense</button>
</div>

    </form>
};

export default ExpenseForm;
