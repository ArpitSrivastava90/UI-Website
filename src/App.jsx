import "./App.css";
import Card1 from "./components/card-1";
import Card2 from "./components/card-2";
import Card3 from "./components/card-3";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#0A0A0A] px-10 py-10 flex justify-center items-center">
      <div className="w-full h-full  rounded-xl  p-2 bg-black">
        <Card3 />
      </div>
    </div>
  );
};

export default App;
