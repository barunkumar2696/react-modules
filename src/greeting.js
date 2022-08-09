import React  from "react";
import { Home,Contact } from "./components";
import About from "./components";
import './styles.css';
import styles from './styles.module.css'
const Greeting=(props)=>{
    const{Firstname,lastname}=props
    return (<div>
        <h1>Hello {`${Firstname} ${lastname}`}</h1>
        <Home/>
        <Contact/>
        <About/>
        <h1 className="Header">we are going to start css modules</h1>
        <h1 className={styles.Header}>css modules started</h1>
        </div>
       // <h1>Hello {`${props.Firstname} ${props.lastname}`}</h1>
       // React.createElement("h1",{style:{backgroundColor:'lightblue'}},"Hello {`${props.Firstname} ${props.lastname}`}")
    )
}
export default Greeting
//Export-Two types-1.named export,2.default export.
//named export syntax=export functionname.
//named import syntax=import{functionname} from `./component.js` then write <functionname/> inside div.
//named export can be done for multiple functions.


//default export syntax=export default functionname
//default import syntax=import functionname from filename.
//then write <functionname/> inside div/parentelement.
//Default export can be done only for one function.