import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {


  const responseGoogle = (respuesta)=> {
    console.log(respuesta);
    alert(`Bienvenido ${respuesta.profileObj.givenName}`)
  }


  return (
    <div className="App">
    <br/><br/>
    <br/><br/>
      <GoogleLogin
        clientId="1019009893763-dflj9lhtopknvehpgt0e20tvdga25q0m.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;