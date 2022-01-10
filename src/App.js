
import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';
import Container from '@mui/material/Container';
function App() {
  return (
    <Container component='article' maxWidth="sm">
    <h1>Formulario de cadastro</h1>
    <FormularioCadastro/>
    </Container>
  );
}

export default App;
