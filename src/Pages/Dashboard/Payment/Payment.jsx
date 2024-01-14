import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOut from "./CheckOut";
import { Fade } from "react-awesome-reveal";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {

  const location = useLocation()
  const stateValue = location.state;
  console.log(stateValue);
  const Cartprice = parseFloat(stateValue.price)

  return (
    <div className="w-2/3">
      <Fade direction="up" triggerOnce>

        <h2 className="text-3xl font-bold text-center my-10">
          Make Your payment By Stripe !
        </h2>
      </Fade>
      <Fade direction="left" triggerOnce>

        <Elements stripe={stripePromise}>
          <CheckOut price={Cartprice} items={stateValue}></CheckOut>
        </Elements>
      </Fade>
    </div>
  );
};

export default Payment;