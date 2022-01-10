
import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
function App() {
  return (
    <Container component='article' maxWidth="sm">
   <Typography variant='h3' component='h1' align='center'>Formulario de cadastro</Typography>
    <FormularioCadastro/>
    </Container>
  );
}

export default App;
