import React, {useState} from 'react'

import {TextField,Button, Switch, FormControlLabel} from '@material-ui/core';


function FormularioCadastro() {
  const [nome,setNome] =useState('');
  const [sobrenome,setSobrenome] =useState('');
  const [cpf,setCpf] =useState('');
  const [promocoes,setPromocoes] =useState(true);
  const [novidades,setNovidades] =useState(true);
  return ( 

    <form onSubmit={(event)=>{
      event.preventDefault();
      console.log({nome,sobrenome,cpf,promocoes,novidades});
    }}>

    <TextField
      value={nome}
      onChange={(event) =>{
      setNome(event.target.value);
      }} 
      id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
    <TextField
    value={sobrenome}
    onChange={(event) =>{
      setSobrenome(event.target.value);
    }} 
    id="sobrenome" label="Sobrenome" variant="outlined" margin="normal"  fullWidth/>
    <TextField
    value={cpf}
    onChange={(event) =>{
      setCpf(event.target.value);
    }} 
    id="cpf" label="CPF"  name="cpf" variant="outlined" margin="normal" fullWidth/>    

    <FormControlLabel
  
    label="Promocoes" control={
    <Switch  
    checked={promocoes} 
      onChange={(event) =>{
      setPromocoes(event.target.checked);
    }} 
    name="promoces"  color="primary"/>}/>
    <FormControlLabel
   
    label="Novidades" control={
    <Switch
    checked={novidades} 
      onChange={(event) =>{
        setNovidades(event.target.checked);
      }} 
    name="novidades" color="primary"/>}/>
          <Button  variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>

   );
}

export default FormularioCadastro;