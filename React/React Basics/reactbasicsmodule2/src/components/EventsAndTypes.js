function EventsAndTypes() {
  var countOnCLick = 0;
  var countOnMouseHover = 0;
  const hndleBtnOnClick = () => {
    countOnCLick += 1;
    console.log("clik ");
    console.log(countOnCLick);
    window.alert("onClick" + countOnCLick);
  };
  const hndleBtnOnMouseOver = () => {
    countOnMouseHover += 1;
    console.log("hover");
    console.log(countOnMouseHover);
    window.alert("onMouseOver" + countOnMouseHover);
  };
  return (
    <div className="mt-5  flex justify-center ">
      <button className="btn-primary mr-1" onClick={hndleBtnOnClick}>
        onCLick
      </button>

      <button className="btn-primary ml-1" onMouseOver={hndleBtnOnMouseOver}>
        onMouseOver
      </button>
    </div>
  );
}

export default EventsAndTypes;
