
import { useState, useEffect } from 'react';
import { FormGroup,FormControlLabel,Switch ,Button ,TextField} from '@mui/material';

function FormSignUp(props){
    const{handleSubmit} = props
    const [name , setName] =useState("")
    const [lastname , setLastName] =useState("")
    const [email , setEmail] =useState("")
    const [prom , setProm] =useState(true)
    const [nov , setNov] =useState(true)
    //saber si hay cambios -> useEffect
/*     useEffect(
        ()=>{
            console.log("cambio de name:" , name)
        },[name]
    ) */
    return(
        <form onSubmit={
            (e)=>{
                e.preventDefault()
                handleSubmit({name , lastname , email , prom , nov})
                }}>
            {/*     fullWidth -> colocar el textfield por toda la pantalla
                    margin -> darle espacio entre texfields
            */}
            <TextField id='name' label='Nombre' variant='outlined' fullWidth margin='normal'
                onChange={
                    (e)=>{
                        //console.log(e.target.value)
                        setName(e.target.value)
                    }
                }
                value={name}
            />
            <TextField id='lastName' label='Apellidos' variant='outlined' fullWidth margin='normal' value={lastname}
                onChange={
                    (e)=>{
                        
                        setLastName(e.target.value)
                    }
                }
            />
            <TextField id='email' label='Correo' variant='outlined' fullWidth margin='normal' value={email}
                onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                }
            />
            <FormGroup>
                <FormControlLabel control={
                <Switch  checked={prom}  
                    onChange={(e)=>setProm(e.target.checked)}
                />  
                }
                label="Promociones"
                />
                <FormControlLabel control={
                <Switch checked={nov}
                    onChange={(e)=>setNov(e.target.checked)}
                />  
                }
                label="Novedades"
                />
            </FormGroup>

            <Button variant="contained" type='submit'>
                Registrarse
            </Button>
        </form>
    )
}
export default FormSignUp