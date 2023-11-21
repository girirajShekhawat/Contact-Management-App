import React, { useState } from 'react'

export default function CreateContact(props) {
    const { contact, handleSubmit, setCreateContact  } = props;
    const [newContact, setNewContact] = useState({
      id: `${contact.length+1}`,
      name: "",
      phone: "",
      email: "",
    });
  
    const handleCancel=()=>{
        setCreateContact(false)
    }

    return (
        <div className='bg-[#cee6f3] min-h-screen'>

    
      <div className="mx-auto max-w-md p-4">
        <form
          onSubmit={(event) => handleSubmit(event, newContact)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 text-center">
            <img
              src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
              alt="Profile img"
              className="mx-auto w-33 h-33 rounded-full mb-4"
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={newContact.name}
              onChange={(e) =>
                setNewContact({
                  ...newContact,
                  name: e.target.value,
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
              required
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={newContact.phone}
              onChange={(e) =>
                setNewContact({
                  ...newContact,
                  phone: e.target.value,
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Phone"
              required
            />
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={newContact.email}
              onChange={(e) =>
                setNewContact({
                  ...newContact,
                  email: e.target.value,
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              required
            />
          </div>
  
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
  
  