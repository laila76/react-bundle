import React from 'react'

export default function CardContact() {
  return (
    <div className="px-20 py-10">
      <h1 className="text-5xl text-blue-900 font-black">Contactez moi</h1>
      <p className="w-96 pt-7 text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        dignissimos maxime cumque ut commodi labore esse nam quaerat quis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum 
      </p>
      <div>
        <div>
          <form>
            <div className="mb-2 flex mt-7 ">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-blue-900 text-gray-900 text-sm rounded-lg  w-full p-2.5 mr-5"
                placeholder="Name"
                required=""
              />
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-blue-900 text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="E-mail"
                required=""
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-t-2 border-l-2 border-blue-900 italic text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="">
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-blue-900  text-gray-900 text-sm rounded-lg block w-full pb-24 "
                placeholder="Message"
                required=""
              />
            </div>
          </form>
        </div>
        <div className="py-80 ">
        <button
          type="button"
          className="inline-block px-8 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase  shadow-md
           hover:shadow-lg
           focus:shadow-lg focus:outline-none focus:ring- active:shadow-lg transition duration-150 ease-in-out"
        >
          Send Messge
        </button>
      </div>
      </div>
    </div>
  );
}
