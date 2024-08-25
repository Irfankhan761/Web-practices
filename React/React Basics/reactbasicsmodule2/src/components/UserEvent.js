function UserEvent() {
  let changeMode = true;
  const ligtMode = (
    <h1 className="text-purple-600 text-3xl bg-white font-bold">
      Light Mode is On
    </h1>
  );
  const darkMode = (
    <h1 className="text-white text-3xl bg-black font-bold">Dark Mode is On</h1>
  );
  const handleMode = () => {
    changeMode = !changeMode;
    if (changeMode === true) {
      window.alert("Dark Mode is On");
      console.log("dark mode");
    } else {
      window.alert("Light Mode is On");
      console.log("light mode");
    }
  };
  return (
    <div>
      {changeMode ? ligtMode : darkMode}
      <button className="btn-primary ml-1 mt-2" onClick={handleMode}>
        change mode
      </button>
    </div>
  );
}
export default UserEvent;
