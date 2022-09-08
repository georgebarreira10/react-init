import { Book } from "./components/Book";
import FormBook from "./pages/FormBook";

function App() {
 
 
 let livros = [
  
  {id: 1, nome: 'Livro 1'},
  {id: 2, nome: 'Livro 2'},
  {id: 3, nome: 'Livro 3'},
  {id: 4, nome: 'Livro 4'},
  {id: 5, nome: 'Livro 5'},


]
  return (
    <div>

      {/* <FormBook />
          
      <h1>Livros</h1> 
      <div>
        {livros.map(book => <Book key = {book.id} id={book.id} nome= {book.nome}  />)}
        {/* <ul>
          <li>Memorias de uma Gueixa</li>
          <li>O Principe</li>
          <li>Simmarillion</li>
        </ul> */}
        
        {/* <Book nome='Livro 1' />
        <Book nome='Livro 2' />
        <Book nome='Livro 3' />
        <Book nome='Livro 4' />
        <Book nome='Livro 5' /> */}
      
      </div> */}

    </div>
  );
}

export default App;
