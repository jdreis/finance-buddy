import Transaction from "../Transaction.js";
import { Container, Button } from "react-bootstrap";

const Bills = ({ expenses }) => {
  
  let transactionList = expenses.map((expense, i) => {
    return <Transaction expenses={expense} key={i} />;
  });

  return (
    <div>
      <Container>
        <h1>Bills</h1>
        {transactionList}
      </Container>
    </div>
  )
}

export default Bills;
