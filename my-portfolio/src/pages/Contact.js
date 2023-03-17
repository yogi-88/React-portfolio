import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full-grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Contact section
            </p>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto">
                <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md text-gray-700"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md text-gray-700"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="5"
                      className="w-full px-3 py-2 border rounded-md text-gray-700"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
