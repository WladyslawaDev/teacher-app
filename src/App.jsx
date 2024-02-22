import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Lesson 1</h1>
      <ol>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum, aperiam eius autem error accusamus non iusto soluta! Tempore quia ex quis mollitia aperiam officia quasi laborum, culpa ullam nam?</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea aspernatur fugit numquam minus. Vero ad tenetur voluptatibus quidem voluptas qui, sed natus voluptatem numquam. Iusto impedit ipsum earum accusantium.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, molestiae quia. Ullam optio sunt, vero placeat, molestias temporibus sequi laborum non veritatis quaerat ad, quos debitis perspiciatis est voluptatibus adipisci.</li>
        <li></li>
        <li></li>
      </ol>
    </>
  );
}

export default App;
