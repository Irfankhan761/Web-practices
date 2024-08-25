export default function PromoHeading(props) {
  //   var res = props.heading ? props.heading : props.heading30;
  let res = props.heading || props.heading30 || props.heading45;
  return (
    <>
      <div className="mt-4 ml-2 w-60 h-20 border-2 border-purple-700 font-bold bg-purple-300 text-green-600  text-center">
        <h1>{res}</h1>
        <h2>{props.callToAction}</h2>
      </div>
    </>
  );
}
