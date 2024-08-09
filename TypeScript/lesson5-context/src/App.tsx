import { useContext } from "react";
import { DataContext } from "./context/DataContext";

const App: React.FC = () => {
  const [product] = useContext(DataContext); 
  return (
    <div className="container">
      <h1>{product[0].title}</h1>
    </div>
  );
};

export default App;
