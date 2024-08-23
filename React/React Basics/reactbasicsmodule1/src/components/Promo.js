// CSS methods
// 1st method to add css  like through path .promo-section"
// 2nd method to add CSS styles to components is using inline styles. //but here syntax is changed to camelCase without hypen
// 3rd method Besides inlining a style object literal, you can also save it in a variable, and then use that variable instead of passing an object literal.
// 4rth methods is tailwind
function Promo() {
  const styles = {
    color: "tomato",
    fontSize: "20px",
  };
  return (
    <div className="promo-section">
      <div>
        <h1 style={{ color: "tomato", fontSize: "30px", fontWeight: "bold" }}>
          Promo style
        </h1>
        <h1 style={styles}>Don't miss this deal!</h1>
      </div>
      <div>
        <h2>
          Subscribe to my newsletter and get all the shop items at 50% off!
        </h2>
        <p className="text-lime-400 text-[30px] font-bold">
          This is the Tailwind methods
        </p>
      </div>
    </div>
  );
}

export default Promo;
