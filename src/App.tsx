import Header from "./components/Header";
import Window from "./components/Window";
import DesktopBackground from "./assets/apple-bg.jpeg";
import Dock from "./components/Dock";

function App() {
  return (
    <>
      <div className="absolute inset-0">
        <img
          src={DesktopBackground}
          className="w-full h-full aspect-video"
        ></img>
      </div>
      <Header />
      <Window />
      <Dock />
    </>
  );
}

export default App;
