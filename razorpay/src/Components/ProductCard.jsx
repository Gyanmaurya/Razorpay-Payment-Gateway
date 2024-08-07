
import '../App.css';
import { useState } from 'react';
export default function ProductCard() {
     const [amount, setamount] = useState(350);

     // handlePayment Function
     const handlePayment = async () => {
         try {
             const res = await fetch(`${({}).VITE_BACKEND_HOST_URL}/api/payment/order`, {
                 method: "POST",
                 headers: {
                     "content-type": "application/json"
                 },
                 body: JSON.stringify({
                     amount
                 })
             });
 
             const data = await res.json();
             console.log(data);
             handlePaymentVerify(data.data)
         } catch (error) {
             console.log(error);
         }
     }
 
     // handlePaymentVerify Function
     const handlePaymentVerify = async (data) => {
         const options = {
             key: ({}).RAZORPAY_KEY_ID,
             amount: data.amount,
             currency: data.currency,
             name: "Devknus",
             description: "Test Mode",
             order_id: data.id,
             handler: async (response) => {
                 console.log("response", response)
                 try {
                     const res = await fetch(`${({}).VITE_BACKEND_HOST_URL}/api/payment/verify`, {
                         method: 'POST',
                         headers: {
                             'content-type': 'application/json'
                         },
                         body: JSON.stringify({
                             razorpay_order_id: response.razorpay_order_id,
                             razorpay_payment_id: response.razorpay_payment_id,
                             razorpay_signature: response.razorpay_signature,
                         })
                     })
 
                     const verifyData = await res.json();
 
                     if (verifyData.message) {
                         toast.success(verifyData.message)
                     }
                 } catch (error) {
                     console.log(error);
                 }
             },
             theme: {
                 color: "#5f63b8"
             }
         };
         const rzp1 = new window.Razorpay(options);
         rzp1.open();
     }
     return (
        <>
       <div className="main" >
       <div>
       <img
                    src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/pack-of-five-plain-tshirt-white/1.webp"
                    alt="card-image"
                />
       </div>

       <div className='proName'>My First Product</div>
       <div className='price'>₹350 <span>₹699</span></div>
       <div className='buttonCheckout' onClick={handlePayment}> <button>Buy Now</button> </div>
      </div>
        </>
     );
 }