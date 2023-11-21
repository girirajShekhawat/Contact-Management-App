



import React, { useState } from 'react';

export default function Edit(props) {
  const { onUpdate, contact,setEditFormVisible } = props;

  const [updateContact, setUpdateContact] = useState(contact);


const handleCancel=()=>{
  setEditFormVisible(false)
}

  return (
    <div className=' min-h-screen bg-[#cee6f3]'>

    
    <div className="mx-auto max-w-md p-4">
      <form
        // onSubmit={(event) => event.preventDefault()} // Prevent form submission (handled by the "Update" button)
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
          <input
            type="text"
            value={updateContact.name}
            onChange={(e) =>
              setUpdateContact({ ...updateContact, name: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             required
            placeholder={contact.name}
       
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={updateContact.phone}
            onChange={(e) =>
              setUpdateContact({ ...updateContact, phone: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder={contact.phone}
           
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={(event) => onUpdate(event, updateContact)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Update
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
