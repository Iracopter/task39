import './App.css';
import { My_Photo } from './components/My_Photo';
import {Contact_Info} from './components/Contact_Info';
import {Work_Experience} from './components/Work_Experience'

function App() {
  return (
    <div className='wrapper'>
        <My_Photo path="src/0000.jpg"/>
        <Contact_Info/>
        <Work_Experience/>
    </div>
  );
}

export default App;
