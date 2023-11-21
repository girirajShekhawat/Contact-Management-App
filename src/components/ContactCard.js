import React from 'react'


export default function ContactCard(props) {
  const { name, phone, id } = props.Item;
  const { onDelete, onEdit, Item } = props;

  return (
    <div className="box-content flex flex-col md:flex-row h-auto md:h-16 hover:bg-[#9F91CC] border-b-2 border-slate-400 hover:border-[#5C4B99] p-2 hover:text-white">
      <div className="mb-2 md:mb-0 md:mr-4 flex-grow">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-gray-600">{phone}</div>
      </div>
      <div className="flex mt-2 md:mt-0">
        <img
          src="https://w7.pngwing.com/pngs/616/37/png-transparent-trash-can-illustration-computer-icons-icon-design-delete-button-miscellaneous-text-rectangle-thumbnail.png"
          className="delete cursor-pointer mx-3"
          alt="Delete-contact"
          onClick={() => onDelete(id)}
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"
          className="delete cursor-pointer"
          alt="edit-contact"
          onClick={() => onEdit(Item)}
        />
      </div>
    </div>
  );
}
