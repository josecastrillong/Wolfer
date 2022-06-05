import { PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButton() {
  return (
    <PayPalButtons
      amount="0.01"
      shippingPreference="NO_SHIPPING"
      onSuccess={(details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
      }}
      options={{
        clientId: 'sb',
        currency: 'USD',
        enableShippingAddress: false,
        style: {
          size: 'medium',
          color: 'gold',
          shape: 'pill',
        },
      }}
    />
  );
}

export default PayPalButton;
