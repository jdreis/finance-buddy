const Transaction = (props) => {
  return (
    <div className="transaction">
      <h2>{props.expenses.title}</h2>
      <p>{props.expenses.amount}</p>
    </div>
  );
};

export default Transaction;
