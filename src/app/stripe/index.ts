import { loadStripe, Stripe } from "@stripe/stripe-js";
import { ICartItem_Order_Invoice } from "@/interfaces/order.interface";

export const CheckOut = async (items: Array<ICartItem_Order_Invoice>) => {
  const lineItems = items.map((item) => ({
    price: item.productData.amount.toString(), // Assuming priceId is the ID of your Stripe price
    quantity: item.quantity,
  }));
  let stripePromise: Promise<Stripe | null> | null = null;

  let getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51ODNm9BWw71FfpkjCq4NU7DcirBNBzdBKkVp3zSQPSqLzXuMDfs1yc2nXq8yBb28t4ekSbF3fbc9cmEVFpKT04Jr00uo91qm7V"
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  await (stripe as Stripe).redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
};
