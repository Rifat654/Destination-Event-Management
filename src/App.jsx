import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App w-full h-full  overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
