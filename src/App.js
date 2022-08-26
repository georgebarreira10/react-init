import { Book } from "./components/Book";

function App() {
  return (
    <div>
      <h1>Livros</h1>
      <div>
        {/* <ul>
          <li>Memorias de uma Gueixa</li>
          <li>O Principe</li>
          <li>Simmarillion</li>
        </ul> */}
        <Book nome='Livro 1' />
        <Book nome='Livro 2' />
        <Book nome='Livro 3' />
      </div>
    </div>
  );
}

export default App;
