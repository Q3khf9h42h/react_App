import './ExpenseItem.css';
function ExpenseItem(props){
    
    return (
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
    <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
    </div>
    <div className="expense-item_location">Location: {props.locationOfExpenditure}</div>
    </div>
    
     );
}
export default ExpenseItem;