import React from 'react'

function index() {
  return (
    <div className='bg-transparent flex flex-col items-center justify-center'>
      <section className='w-1/2 h-[90vh] flex flex-col items-center justify-start'>
    <img src='/contactus.png' alt='Achilles Fitness Logo' className='w-full h-[40%]' />        

  <form className="bg-transparent p-8 rounded-lg shadow-lg w-full ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-white mb-2" htmlFor="firstName">First Name</label>
        <input
          className="w-full p-2 rounded border border-white bg-gray-700 text-white placeholder-gray-400"
          type="text"
          id="firstName"
          placeholder="First Name"
        />
      </div>
      <div>
        <label className="block text-white mb-2" htmlFor="lastName">Last Name</label>
        <input
          className="w-full p-2 rounded border border-white bg-gray-700 text-white placeholder-gray-400"
          type="text"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="phone">Phone</label>
      <input
        className="w-full p-2 rounded border border-white bg-gray-700 text-white placeholder-gray-400"
        type="tel"
        id="phone"
        placeholder="Phone"
      />
    </div>
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="email">Email</label>
      <input
        className="w-full p-2 rounded border border-white bg-gray-700 text-white placeholder-gray-400"
        type="email"
        id="email"
        placeholder="Email"
      />
    </div>
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="message">Message</label>
      <textarea
        className="w-full p-2 rounded border border-white bg-gray-700 text-white placeholder-gray-400"
        id="message"
        rows="4"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full p-2 bg-red-600 text-white rounded font-bold text-lg hover:bg-red-700"
    >
      Send
    </button>
  </form>

        </section> 
    </div>
  )
}

export default index
