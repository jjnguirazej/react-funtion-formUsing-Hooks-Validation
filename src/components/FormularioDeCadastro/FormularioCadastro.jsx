import React from 'react'

import {TextField,Button, Switch, FormControlLabel} from '@material-ui/core';


function FormularioCadastro() {
  return ( 

    <form>

<TextField id="Nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
<TextField id="Sobrenome" label="Sobrenome" variant="outlined" margin="normal"  fullWidth/>
<TextField id="CPF" label="CPF" variant="outlined" margin="normal" fullWidth/>    

<FormControlLabel label="Promocoes" control={<Switch name="promoces" defaultChecked color="primary"/>}/>
<FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked color="primary"/>}/>
  

      <Button  variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>

   );
}

export default FormularioCadastro;