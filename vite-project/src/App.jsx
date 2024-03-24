//les composants

import { SayHellO } from "./sayHello";

function App() {
  return (
  <div style={{ border: "1px solid orange"}}>
    <p style={{color: "red"}}>I m App Component</p>
    <SayHellO/>
    <SayHellO/>
    <SayHellO/>
  </div>
  );
}

export default App;