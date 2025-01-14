import { Route, Routes } from 'react-router-dom'
import Main from './Main';
import './app.css'
import Item from './Item';
function App() {
  return (
    <Routes>
        <Route path="/"  element = {<Main />}/>
        <Route path="/item/:extra/:id"  element = {<Item />}/>
    </Routes>
  );
}

export default App;
