import { useState } from "react";

function App() {
  const [coupon, setCoupon] = useState(undefined);

  function handleSubmit(event) {
    event.preventDefault();
    const couponCode = event.target.coupon.value;
    // Anfrage auf das Backend!
    fetch(`http://localhost:3000/coupons/${couponCode}`)
      .then((res) => res.json())
      .then((res) => {
        setCoupon(res);
      });
  }
  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <input name="coupon" placeholder="Check coupon" />
      </form>
      {coupon && (
        <div>
          You get {coupon.couponVariation.value}
          {coupon.couponVariation.couponType === "absolute" ? "€" : "%"}{" "}
          discount!
        </div>
      )}
      {coupon === null && <div>Invalid coupon!</div>}
    </main>
  );
}

export default App;
