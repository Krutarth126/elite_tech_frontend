import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Input = () => {
  let router = useRouter();
  const [state, setState] = useState({
    name: "",
    contact: "",
    email: "",
    websiteType: "",
  });

  const handleclick = (e) => {
    setState((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submit = async (e) => {
    if (!state.name || !state.email || !state.contact || !state.websiteType) {
      alert("Form is Incomplete please do complete it");
    } else {
      await axios.post(
        "https://elite-tech-backend.herokuapp.com/client/post",
        state
      );
      console.log(state);
      e.preventDefault();
      alert("Submitted Succesfully");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };
  return (
    <section id="contact">
      <div className="my-5" style={{ minHeight: "80vh" }}>
        <h2>Contact Us</h2>
        <form className="w-75 m-auto" style={{ fontWeight: "700" }}>
          <div className="form-group ">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter Your Name"
              name="name"
              value={state.name}
              onChange={handleclick}
            />
            {state.name ? "" : <small>Enter Your Name</small>}
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact No.</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter Your Contact No."
              name="contact"
              value={state.contact}
              onChange={handleclick}
            />
            {state.contact ? "" : <small>Enter Your Contact No.</small>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your Email Address"
              name="email"
              value={state.email}
              onChange={handleclick}
            />
            {state.email ? "" : <small>Enter Your Email</small>}
          </div>
          <div className="form-group">
            <label htmlFor="price">Website Type</label>
            <input
              type="text"
              className="form-control"
              id="websiteType"
              placeholder="Enter Website Type"
              name="websiteType"
              value={state.websiteType}
              onChange={handleclick}
            />
            {state.websiteType ? "" : <small>Enter Your Website Type</small>}
          </div>
        </form>
        <div className="w-75 m-auto mt-3">
          <button onClick={submit} className="btn btn-success w-100 m-auto">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Input;
