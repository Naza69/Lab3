import { Button, Form } from "react-bootstrap";
import styles from './Login.module.css';
import { FormEvent, useState } from "react";
import useForm from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";


const Login = () =>{

    const [showPass, setShowPass] = useState(false); //Estado para mostrar la contra

    const {values, handleChange} = useForm({
        user: "",
        password : ""
    });

    const{user, password} = values;

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const sendForm  = async (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const response = await fetch("/user.json");
        const usersData = await response.json();
        const userFound = usersData.users.find((u : {username : string ;
            password : string})=> u.username === user && u.password === password
        );
        if(userFound){
            dispatch(setLogin(user));
            navigate("/")
        }else{
            alert("Usuario o contraseña no encontrados")
        }

    };

    return(

        <div className = {styles.containerLogin}>
            <div className={styles.containerForm}>
                
            <span className="material-symbols-outlined" style={{fontSize : '9vh'}}>
                person
            </span> 
                

                <Form onSubmit={sendForm}> 
                    <Form.Group className="mb-3">
                        <Form.Label>User</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        value={user} 
                        name="user" 
                        type="text" 
                        placeholder="User" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Pasword</Form.Label>
                        <Form.Control 
                        onChange={handleChange}
                        value={password}
                        name="password" 
                        type={showPass ? "text" : "password"} 
                        placeholder="password" />
                    </Form.Group>
                    <Form.Check // prettier-ignore
                        type="switch"
                        onChange={() => {setShowPass(!showPass)}} //Cambia el estado de showPass
                        id="custom-switch"
                        label="Show password"/>
                    <div style={{display : 'flex',flexDirection : 'column', alignItems: 'center', padding: '1vh' }}>
                        <Button type="submit" variant="primary">Send</Button>{' '}
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;