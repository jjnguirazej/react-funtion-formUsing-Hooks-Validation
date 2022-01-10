import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function FormularioCadastro() {
  return ( 

    <form>

<TextField id="Nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
<TextField id="Sobrenome" label="Sobrenome" variant="outlined" margin="normal"  fullWidth/>
<TextField id="CPF" label="CPF" variant="outlined" margin="normal" fullWidth/>    

      <label>Promocoes</label>
      <input type="checkbox"/>

      <label>Novidades</label>
      <input type="checkbox"/>

      <Button  variant="contained" type="submit">Cadastrar</Button>
    </form>

   );
}

export default FormularioCadastro;