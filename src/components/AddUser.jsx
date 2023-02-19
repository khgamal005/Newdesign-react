import React from 'react'
import { useState } from 'react';
import classes from './AddUsers.module.css';
import Card from './UI/Card';
import Button from './UI/Button';

const AddUser = ({selectedMovie,orderUserHandeler}) => {
  const isEmpty = value => value.trim()===''
  const isphonechars = value => value.trim().length > 7

    const [user, setUser] = useState({
        userName:'',
        phone:'',
        city:'',
        id:''
    })

   
    
    const [formInputValidity, setformInputValidity] = useState({
      userName :true,
      phone:true,
      city:true,
    })

    
    const getUser =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }


    const submitUser=(e)=>{
      e.preventDefault()

      const enteredNameIsValid=!isEmpty(user.userName)
    const enterdPhoneIsValid=isphonechars(user.phone)
    const enteredCityIsValid=!isEmpty(user.city)

    setformInputValidity({
      userName :enteredNameIsValid,
      phone :enterdPhoneIsValid,
      city :enteredCityIsValid,
    })

    const formIsValid =  enteredNameIsValid &&enteredCityIsValid &&enterdPhoneIsValid
    if(!formIsValid){
      return
    }

    orderUserHandeler(user)

      setUser({userName:'',phone:'',city:''})

    }
    const classNamecontrol =`${classes.control } ${formInputValidity.userName?'': classes.invalid }`
    const classphonecontrol =`${classes.control } ${formInputValidity.phone?'': classes.invalid }`
    const classCitycontrol =`${classes.control } ${formInputValidity.city?'': classes.invalid }`
  

  return (
   
        <Card>
        <p className="card-text-title ">Name :{selectedMovie.name}</p>
      <p>genres  : {selectedMovie.genres}</p>
      <p>premiered  : {selectedMovie.premiered}</p>
<form className={classes.form} onSubmit={submitUser}>
<div className={classNamecontrol}>
  <label htmlFor='name'>Your Name</label>
  <input type='text' id='name' name='userName' value={user.userName} onChange={getUser} />
  {!formInputValidity.userName && <p>please enter valid name</p>}
</div>
<div className={classphonecontrol}>
  <label htmlFor='Phone'>Phone</label>
  <input type='text' id='Phone'  name='phone'  onChange={getUser}  value={user.phone}/>
  {!formInputValidity.phone && <p>please enter valid phone</p>}

</div>
<div className={classCitycontrol}>
  <label htmlFor='City'>City </label>
  <input type='text' id='City' name='city' onChange={getUser}  value={user.city} />
  {!formInputValidity.city && <p>please enter valid city</p>}

</div>

<div  className={classes.actions}>
  <Button  type='submit'>Add User</Button>      </div>
      </form>
        </Card>


  )
}

export default AddUser