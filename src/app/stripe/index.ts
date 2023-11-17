import { loadStripe, Stripe } from "@stripe/stripe-js";
import { ICartItem_Order_Invoice } from "@/interfaces/order.interface";

export const CheckOut = async (items: Array<ICartItem_Order_Invoice>) => {
  console.log(process.env.STRIPE_PUBLISHABLE_KEY!);
  const lineItems = items.map((item) => ({
    price: item.productData.amount.toString(), // Assuming priceId is the ID of your Stripe price
    quantity: item.quantity,
  }));
  let stripePromise: Promise<Stripe | null> | null = null;

  let getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51NyCGaSGl70Xf1osaMiGDziGcx3hiO7R3jSC102G8iQ0H0Gk2DXejDTN0dLBhsxt2RWFgW1yykCqa7IwSghx99ff00ueD5USLU"
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
