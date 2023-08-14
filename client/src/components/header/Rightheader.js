import {React, useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../Context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css"

const Rightheader = ({Logclose}) => {

    const { account, setAccount } = useContext(LoginContext);

  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
        {
                        account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
                        <Avatar className='avtar'></Avatar>
        }
        {account ? <h3>Helloo, {account.fname.toUpperCase()}</h3>:""}
     </div>
     <div className='nav_btn' onClick={()=>Logclose()}>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/">Shop By Category</NavLink>
        
        <Divider style={{width: "100%" , marginLeft:"-20px"}}/>

        <NavLink to = "/">today's Deal</NavLink>
        {
            account ? <NavLink to = "/buynow">Your Orders</NavLink> : <NavLink to ="/login">Your orders</NavLink>
        }
        
        <Divider style={{width: "100%" , marginLeft:"-20px"}}/>


        <div className="flag">
        <NavLink to ="/">Settings</NavLink>
        <img src = "" alt=""/>
        </div>
        
         </div>
      </div>
    </>
  )
}

export default Rightheader
