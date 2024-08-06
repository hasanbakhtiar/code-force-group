import ShowList from "./components/ShowList";
import CreateList from "./components/CreateList";
import FetchApi from "./components/FetchApi";

const App: React.FC = () => {
  return (
    <div className="container">
        
        <ShowList />
        <FetchApi />
    </div>
  );
};

export default App;
