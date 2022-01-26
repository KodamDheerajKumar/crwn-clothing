import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KM4CYSADK2Mgw4fC8t4UOG6yxefOehJFSoIAxaz1qLhZN5dotzCpYo4nO6pBSuDrQaS5DNUufnnipc1OCpVF6UD00XdO0Fdqv'


    const onToken= token => {
        console.log(token);
        alert('Payment Successful');

    }

    return(
        <StripeCheckout
        label="PAY NOW"
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price} `}
        amount = {priceForStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export  default StripeCheckoutButton;