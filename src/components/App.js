import { useState,useEffect  } from "react";
import List from "./List";
import Edit from "./Edit";
import CreateContact from "./CreateContact";
import Navbar from "./Navbar";



function App() {
  // state for managing the contacts
  const [contact, setContact] = useState([]);

  // state for the conditionals rendring of the edit page
  const [isEditFormVisible, setEditFormVisible]=useState(false)
  const [isCreateContactVisible,setCreateContact]=useState(false)
  const [selectedContact , setSelectedContact ]=useState(null)
  
  
  //seting the editing the contact page
  const onEdit=(contactDetail)=>{

    setEditFormVisible(true);
    setSelectedContact(contactDetail)

  }
  // updating the contact 
  const handleUpdate= async ( e,updatedContact)=>{
 e.preventDefault();

//  checking the contact is empty or not
 if(updatedContact.name===""||updatedContact.phone===""){
  return ;
 }

const url=`https://jsonplaceholder.typicode.com/posts/${updatedContact.id}`
const response= await fetch(url ,{
  method: 'PUT',
  body: JSON.stringify({
    id: `${updatedContact.id}`,
    title: 'foo',
    body: 'bar',
    userId: `${updatedContact.id}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})


const data= await response.json();

if(data){
  const contacts= contact.map((item)=>{
    if(item.id===updatedContact.id){
      item=updatedContact
    }
    return item;
  })

  setContact([...contacts])
}
setEditFormVisible(false);
setSelectedContact(null)
  }


  // deleting the contact from state
  const handleDelete= async (id) =>{
  
    const url=`https://jsonplaceholder.typicode.com/posts/${id}`
  
    const response= await fetch(url,{method: 'DELETE'});
    const data =await response.json();
  // filtering the deleted contact
    if(data){
     const newContact= contact.filter((item)=>item.id!==id)
     setContact(newContact);
    }else{
      console.log("there is no data provided");
    }
    }


    // fething all contacts for intial rendering 
    async function contactfetch(){
      const url='https://jsonplaceholder.typicode.com/users'
      const response=await fetch(url);
      const data=await response.json();
     
      if(data){
        setContact(data);
      }else{
        console.log("there is no data present")
      }
    
     
      }


      useEffect(()=>{
        contactfetch()
      },[])
  
      //rendring the createContact form
      const onCreateContact=()=>{
        setCreateContact(true);
      } 

      // creating the new contact
      const handleSubmit=(e,newContact)=>{
        e.preventDefault();
       if(newContact.name===''||newContact.phone===''){
        return;
       }
        setContact([...contact,newContact])
        setCreateContact(false)
           }



  return (
    <div className="App">
       
      {
      
      
        isCreateContactVisible ? 
        <CreateContact contact={contact} handleSubmit={handleSubmit} setCreateContact={setCreateContact}/> :
        
      

        isEditFormVisible ? <Edit contact={selectedContact} onUpdate={handleUpdate}  setEditFormVisible={setEditFormVisible}/> 
        :<>
         <Navbar onCreateContact={onCreateContact}/>
         <List contact={contact} handleDelete={handleDelete} onEdit={onEdit}/> 
         </>
      }
       

 
  
    </div>
  );
}

export default App;
