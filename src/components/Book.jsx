export function Book(props) {
    console.log(props.nome)
  
    return (
   
    <h3>{`id: ${props.id}, Título: ${props.nome}`}</h3>
    
  );
}
