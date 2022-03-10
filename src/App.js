import './App.css';
import MyNavigation from './MyComponents/MyHeader/MyNavigation';
import MyHeader from './MyComponents/MyHeader';
import TopInfo from './MyComponents/TopInfo';
import Body from './MyComponents/Body';
import MyFooter from './MyComponents/MyFooter';

function App() {
  return (
    <div className="App">
<MyNavigation></MyNavigation>
<MyHeader></MyHeader>
<TopInfo></TopInfo>
<Body></Body>
<MyFooter></MyFooter>
    </div>
  );
}

export default App;
