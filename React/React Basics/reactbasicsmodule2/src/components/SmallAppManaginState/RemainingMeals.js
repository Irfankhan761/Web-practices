export default function RemainingMeals(props) {
  return (
    <div>
      <h1 className="border-black border-2 p-1 m-1 w-full">
        Meals remaining:{props.count}
      </h1>
    </div>
  );
}
