import PromoHeading from "./PromoHeading";
export default function Promo() {
  const data = {
    heading: "99% of all items!",
    heading30: "30% of all items!",
    heading45: "45% of all items!",
    callToAction: "Ëverything must go!",
  };
  return (
    <div className="flex ">
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
      <PromoHeading
        heading30={data.heading30}
        callToAction={data.callToAction}
      />
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
      <PromoHeading
        heading30={data.heading30}
        callToAction={data.callToAction}
      />
      <PromoHeading
        heading45={data.heading45}
        callToAction={data.callToAction}
      />
    </div>
  );
}
