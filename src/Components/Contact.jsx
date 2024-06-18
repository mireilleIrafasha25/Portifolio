

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <form className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg">
        <h2 className="text-3xl text-white mb-6 text-center">
          Contact <span className="text-green-400">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-1 md:col-span-2 bg-gray-800 text-white rounded-lg p-3 border border-green-400 focus:outline-none focus:border-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 text-white rounded-lg p-3 border border-green-400 focus:outline-none focus:border-green-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-gray-800 text-white rounded-lg p-3 border border-green-400 focus:outline-none focus:border-green-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-1 md:col-span-2 bg-gray-800 text-white rounded-lg p-3 border border-green-400 focus:outline-none focus:border-green-400"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-green-400 focus:outline-none focus:border-green-400 mt-4"
          rows="6"
        ></textarea>
        <button
          type="submit"
          className="mt-6 w-full  text-black rounded-lg p-3 text-center font-semibold bg-green-400 focus:outline-none focus:border-teal-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
