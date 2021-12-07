import React from 'react'
import Image from 'next/image'
import styles from './HomeScreen.module.css'

export default function HomeScreen() {
  return (
  
    <div>
      <h1 className={styles.title}> Adib's Animal Shelter </h1>
      <div className={styles.about}>
        <div className={styles.imageContainer}>
          <Image src="/image/adib2.jpg" layout={'fill'} objectFit={'contain'}/>
        </div>
       
        <div>
          <h3> Hi! I'm Adib! I like rescuing animals! </h3>
          <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        
  )
      </div>
     
  )
    </div>
  )  
}
import React, { useReducer,useState } from 'react'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
 
export default function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }
  const handleChange = event => {
    console.log(event);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  async function post() {
    const val = await fetch(`api/applications/`, {
      method : "POST",
      body : JSON.stringify(formData)
    });
  }

  return (
    <div className="wrapper">
      <h1>Pet Adoption Form</h1>
      {submitting &&
       <div>Submtting Form
       <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
         </div>
     }
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" onChange={handleChange}/>
           <p>Location</p>
           <input name="location" onChange={handleChange}/>
           <p>Email</p>
           <input name="email" onChange={handleChange}/>
           <p>Phone#</p>
           <input name="phone" onChange={handleChange}/>
         </label>
       </fieldset>
       <button type="submit" onClick={post}>Submit</button>
      </form>
    </div>
  )
}
