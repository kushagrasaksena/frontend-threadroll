import Link from 'next/link'
import {useState} from 'react'
import loginImg from '../public/login.svg'
const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return(
    //   <div className="container card authcard center-align">
    //     <h3>Login</h3>
    //     <form >
    //        <input type="email" placeholder="Email"
    //         value={email}
    //         onChange={(e)=>setEmail(e.target.value)}
    //         />
    //         <input type="password" placeholder="Password"
    //         value={password}
    //         onChange={(e)=>setPassword(e.target.value)}
    //         />
    //           <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit">login
    //             <i className="material-icons right">forward</i>
    //         </button>
    //         <Link href="/signup"><a><h5>Dont have a account ?</h5></a></Link>
    //     </form>
       
    //   </div>
        <div id="loginform">
            <FormHeader title="Login" />
            <Form />
            <OtherMethods />
        </div>
    )
  }
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);
  export default Login