import Input from "../molecules/Input";

function Form() {
    return ( 
        <div>
            <h1><p>Login</p></h1>
            <Input placeholder="Usuario" type="text" label="Ingrese su usuario"/>
            <Input placeholder="Contraseña" type="password" label="Ingrese su contraseña"/>

            <p>Si no tienes cuenta <a href="LINK">registrate aquí</a></p>
        </div>
    );
}

export default Form;