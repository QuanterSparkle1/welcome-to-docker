import "./App.css";


const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


