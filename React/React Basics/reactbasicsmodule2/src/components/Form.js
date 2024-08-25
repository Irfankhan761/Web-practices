import { useState } from "react";

export default function Form(props) {
  const [form, setForm] = useState({
    firstName: "Irfan",
    lastName: "Khan",
    email: "irfandk1994@gmail.com",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previus) => ({
      ...previus,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  return (
    <div className="flex flex-col w-2/4 m-auto mt-2 p-2 border-emerald-500 border-4 bg-white">
      <label className=" p-1 m-1 w-full">Enter First Name:</label>
      <input
        name="firstName"
        className="border-black border-2 p-1 m-1 w-full"
        value={form.firstName}
        onChange={handleChange}
        type="text"
      />
      <label className=" p-1 m-1 w-full">Enter Last Name:</label>
      <input
        name="lastName"
        className="border-black border-2 p-1 m-1 w-full"
        value={form.lastName}
        onChange={handleChange}
        type="text"
      />
      <label className=" p-1 m-1 w-full">Enter Email:</label>
      <input
        name="email"
        className="border-black border-2 p-1 m-1 w-full"
        value={form.email}
        onChange={handleChange}
        type="email"
      />
      <span className=" p-1 m-1 w-full">Updated text will be shown here</span>
      <p className="border-black border-2 p-1 m-1 w-full">
        {form.firstName} {form.lastName} {form.email}
      </p>
      <button className="btn-primary mt-1 w-full" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
