import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <div className="flex flex-col w-2/4 m-auto mt-2 p-2 border-emerald-500 border-4 bg-white">
      <input ref={inputEl} type="text" />
      <button className="btn-primary mt-2" onClick={onButtonClick}>
        Focus the input
      </button>
    </div>
  );
}
export default TextInputWithFocusButton;
