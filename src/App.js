import './App.css';
import { useState } from "react";
import {My_Photo} from './components/My_Photo';
import {Contact_Info} from './components/Contact_Info';
import {Work_Experience} from './components/Work_Experience';
import My_place_of_job from './components/My_place_of_job';
import {Counter} from './components/Counter';
import photo from './components/0000.jpg';
import My_projects from './components/My_projects';
import MyComponent from './components/My_projects';


const workItems=[{
  id:1,
  title:"Costumer support",
  description: "Helping users with their techichal problems.",
  name: "DIIA",
  link: "linktext"
}]

const imgLink=photo;
const linkgit='https://api.github.com/users/iracopter/repos';


function App() {

  const [items, setItems]=useState(workItems);

  function AddForm(items) {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [link, setLink] = useState();
    const [title, setTitle] = useState();

    function handleSubmit(e){
      e.preventDefault();
      items.setItems(prev=>prev.concat({title, description, name, link, id:Math.random()}))
    }
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New</legend>
          <input onChange={e=>setTitle(e.target.value)} placeholder="Title" />
          <input onChange={e=>setDescription(e.target.value)} placeholder="Description" />
          <input onChange={e=>setName(e.target.value)} placeholder="Name" />
          <input onChange={e=>setLink(e.target.value)} placeholder="Link" />
          <button>Add</button>
        </fieldset>
      </form>
    )
  }

  return (
    <div className='wrapper'>
        <div className='grid1'>
          <My_Photo path={imgLink}/>
          <Contact_Info/>
          <div className='Work_experience'>
            <h2 className="headers">Work experience</h2>
            <AddForm setItems={setItems}/>
            <My_place_of_job items={items}/>
          </div>
        </div>
        <div className='grid2'>
            <My_projects/>
        </div>
    </div>
  );
}

export default App;
