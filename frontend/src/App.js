
import { Route } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    <Route path="/" exact component={<HomePage/>}/>
    <Route path="/chats" component={<ChatPage/>}/>
    </>
  );
}

export default App;
