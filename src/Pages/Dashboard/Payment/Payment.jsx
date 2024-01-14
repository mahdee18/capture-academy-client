import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {

  const location = useLocation()
  const stateValue = location.state;
  console.log(stateValue);
  const Cartprice = parseFloat(stateValue.price)

  return (
    <div className="w-2/3">
      <h2 className="text-3xl font-bold text-center my-10">
        Make Your payment By Stripe !
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOut price={Cartprice} items={stateValue}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;