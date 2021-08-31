import Link from 'next/link'
import {useState} from 'react'

const Signup = ()=>{
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    return(
    //   <div className="container card authcard center-align">
    //     <h3>Sign Up</h3>
    //     <form>
    //       <input type="text" placeholder="Name"
    //       value={name}
    //       onChange={(e)=>setName(e.target.value)}
    //       />
    //       <input type="email" placeholder="Email"
    //       value={email}
    //       onChange={(e)=>setEmail(e.target.value)}
    //       />
    //       <input type="password" placeholder="Password"
    //       value={password}
    //       onChange={(e)=>setPassword(e.target.value)}
    //       />
    //         <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit">signup
    //           <i className="material-icons right">forward</i>
    //       </button>
    //       <Link href="/login"><a><h5>Already have a account ?</h5></a></Link>
    //     </form>

    //   </div>
         <div id="loginform">
            <FormHeader title="Sign Up" />
            <Form />
            {/* <OtherMethods /> */}
        </div>
    )
  }
  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Name" placeholder="Enter your Name" type="text"/>
     <FormInput description="Email" placeholder="Enter your Email" type="text"/>
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Sign up"/>
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


  export default Signup