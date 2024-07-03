import { useState , useCallback } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numberA, setNumberA] = useState(false);
  const [ charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = usestate("")

  const passwordGenerator = useCallback(()=> {
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberA){
      str+= "0123456789"
    }
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for(let i=1; i<=array.length; i++){
      let char = Math.floor(Math.random()* str.length +1)
      pass = str.charAt(char)
    }

    setPassword(pass)
    

  }, [length, numberA, charAllowed, setPassword]) 



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
  test
</div>


     
    </>
  )
}

export default App
