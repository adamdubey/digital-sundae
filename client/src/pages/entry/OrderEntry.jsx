import Options from './Options';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();

  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionsType="scoops" />
      <Options optionsType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
}
