import "./App.css";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import FullName from "./Components/Profile/FullName";
import Address from "./Components/Profile/Address";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto />
        <FullName />
        <Address />
      </header>
    </div>
  );
}

export default App;
