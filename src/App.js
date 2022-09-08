import { Book } from "./components/Book";
import BookList from "./pages/BookList";
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
      <BookList />
    </div>
  );
}

export default App;
