import style from "./Formulario.css";
import { useState } from "react";
import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export const Formulario = (props) =>
{
    const {nombre, apellidos, telefono, email} = props;
    let signos = ['Capricornio', 'Leo', 'Cáncer', 'Aries', 'Libra', 'Piscis', 'Tauro', 'Escorpio', 'Sagitario', 'Virgo', 'Géminis', 'Acuario'];
    let lenguajes = ['JavaScript', 'PHP', 'Java', 'Python', 'Go', 'Kotlin', 'C#']
    const [language, setLanguage] = useState("JavaScript");
    const handleForm = (event) =>
    {
        event.preventDefault();
        
        if(event.target.nombre.value === "")
        {
            console.log("error");
        }
        var nuevoNombre = event.target.nombre.value;
        var nuevoApellido = event.target.apellidos.value;
        var nuevoTelefono = event.target.telefono.value;
        var nuevoEmail = event.target.email.value;
        var nuevoHoroscopo = event.target.zodiaco.value;
        var nuevoLenguaje = language;

        localStorage.setItem('nombre', nuevoNombre);
        localStorage.setItem('apellido', nuevoApellido);
        localStorage.setItem('telefono', nuevoTelefono);
        localStorage.setItem('email', nuevoEmail);
        localStorage.setItem('horoscopo', nuevoHoroscopo);
        localStorage.setItem('lenguaje', nuevoLenguaje);

        if(localStorage.getItem('nombre'))
        {
            alert('Guardado correctamente');
        }
        else
        {
            alert("Ha habido un error. Vuelve a intentarlo.");
        }
    }
    const [isCorrectName, setCorrectName] = useState('false');
    const [isCorrectSurname, setCorrectSurname] = useState('false');
    const [isCorrectPhone, setCorrectPhone] = useState('false');
    const [isCorrectEmail, setCorrectEmail] = useState('false');
    const isOk = (event) =>
    {
        let currentLength = false;
        let currentID = "";
        if(event.target.value.length > 2)
        {
            currentLength = true;
        }
        else
        {
            currentLength = false;
        }
        currentID = event.target.id;

        if(currentID === "nombre")
        {
            setCorrectName(currentLength);
            console.log(isCorrectName)
        }
        else if(currentID === "apellidos")
        {
            setCorrectSurname(currentLength);
        }
        else if(currentID === "telefono")
        {
            setCorrectPhone(currentLength);
        }
        else if(currentID === "email")
        {
            setCorrectEmail(currentLength);
        }
        
    }

    return (
        <div id="cont">
            
            <h1>Guarda tus datos</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="nombre" className='form-label'>Nombre</label>
                    <div className='divError'>
                        <input type='text' className={isCorrectName == true? "formInputs textOk" : "formInputs textError"} id='nombre' required placeholder="Introduce tu nombre" onChange={isOk} pattern="[A-Za-z]{1,}"></input><br/>
                        <div className="error">Introduce un nombre</div>
                    </div>
                </div>
                <div>
                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                    <div className="divError">
                        <input type='text' id='apellidos' className={isCorrectSurname == true? "formInputs textOk" : "formInputs textError"} required placeholder="Introduce tu apellido" onChange={isOk}  pattern="[A-Za-z]{1,}"/><br/>
                        <div className="error">Introduce apellido(s)</div>
                    </div>
                </div>
                <div>
                    <label htmlFor="telefono" className="form-label" required  onChange={isOk}>Teléfono</label>
                    <div className="divError">
                        <input type='number' id='telefono' className={isCorrectPhone == true? "formInputs textOk" : "formInputs textError"} placeholder="Introduce tu teléfono" onChange={isOk}/>
                        <span className='error'>Introduce tu teléfono</span><br/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="form-label" required >Email</label><br/>
                    <div className="divError">
                        <input type='email' id='email' className={isCorrectEmail == true? "formInputs textOk" : "formInputs textError"} placeholder="Introduce tu email" onChange={isOk}/><br/>
                        <div className="error">Introduce tu email</div>
                    </div>
                </div>
                <br/>
                <label htmlFor="zodiaco">Signo del zodiaco</label>
                <select id='zodiaco' name={'zodiaco'} required>
                    <option disabled selected value="">Elige uno</option>
                    {signos.map((signo) =>
                    {
                        return (
                            <option>{signo}</option>
                        );
                    })}
                </select><br></br>
                <div id='leng'>
                    <label htmlFor="language" className="leng">Lenguaje que más te gusta:</label>
                    {lenguajes.map((language) =>
                    {
                        return(
                            <div className='containerLang form-check'>
                                <input type='radio' id={language} name ='language' className="leng form-check-input" value={language} onChange={(e)=>setLanguage(e.target.value)}/> {language}
                            </div>
                        );
                    })}
                   
                </div>
                <div>
                    <Button variant="contained" type="submit" endIcon={<SendIcon/>}>Enviar</Button>
                </div>
            </form>
        </div>
    )
}

Formulario.propTypes = 
{
    nombre: PropTypes.string,
    apellidos: PropTypes.string, 
    telefono: PropTypes.number,
    email: PropTypes.string
}