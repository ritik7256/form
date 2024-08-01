import { useState } from 'react'
import './App.css'

function App() {
  const[name,setName]=useState()
  const[password,setPassword]=useState();
  const[fullname,setFullname]=useState()
  const[fullPassword,setfullPassword]=useState();

  const Name=(e)=>{
       setName(e.target.value)

  }
  const Password=(e)=>{
        setPassword(e.target.value);

  }
  const submit=(e)=>{
       e.preventDefault();
       setFullname(name)
       setfullPassword(password);


  }
  return (
    <>
     <form action="" onSubmit={submit}>
      
      <h1>Hello {fullname} {fullPassword}</h1>
    <input type="text" 
      onChange={Name}
      value= {name}
      />
          <br />
       <input type="text" value={password} 
        onChange={Password} 
          />

        <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default App
