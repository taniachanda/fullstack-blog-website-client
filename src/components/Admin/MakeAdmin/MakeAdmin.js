import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [adminMail, setAdminMail] = useState("");

  const handleSubmit = () => {
    const eventValue = { email: adminMail };

    fetch("https://serene-everglades-14231.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventValue),
    }).then((res) => {
      alert("Admin added successfully");
    });
  };
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <div className="text-4xl leading-4 font-extrabold text-green-900 mt-10 text-center ">
              <h2 className=" pl-3">Make Admin</h2>
            </div>
            <div className="md:flex mt-10 pt-10  justify-center">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                  Put a email
                </label>
                <input
                  onBlur={(e) => {
                    setAdminMail(e.target.value);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                  placeholder="something@mail.com"
                  type="email"
                />
                {/* <p className='text-danger mb-0'>{errors.headline && '* This field is required'}</p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className=" ml-3 mt-3 text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
