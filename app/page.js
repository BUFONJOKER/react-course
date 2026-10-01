import {useState} from "react";

function createTitle(title) {
  // if (title){
  //   return title
  // }
  // else {
  //   return 'Default Title'
  // }

  return title ? title : "Default title";
}

function Header({ title }) {
  // console.log(title)
  // return <h1>{`Cool ${title}`}</h1>;
  return <h1> {createTitle(title)} </h1>;
}

export default function HomePage() {
  const name = ["mani", "rathore", "kurrana"];

  const [likes, setLikes] = useState(1);

  function handleClick() {
    setLikes(likes * 2);
  }

  return (
    <div>
      <Header title="REACT" />
      <Header title="REACT DOM" />

      <ul>
        {name.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
