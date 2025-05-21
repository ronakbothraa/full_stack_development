import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass) 

  },  [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);


  useEffect(() => {passwordGenerator()}, 
  [length, numberAllowed, charAllowed, passwordGenerator]);
  
  return (
    <>
      <h1>Password Generator</h1>

      <input 
        type="text"
        value={password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}>copy</button>

      <p></p>
      <input 
        type="range"
        min={6}
        max={25}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        onClick={copyPasswordToClipboard} 
      />
      <label htmlFor="">Length: {length}</label>

      <p></p>
      <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => (!prev))
        }} 
      />
      <label htmlFor="numberInput">Numbers</label>
        
      <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={() => {
          setCharAllowed((prev) => (!prev))
        }} 
      />
      <label htmlFor="charAllowed">character</label>    
    </>
  )
}
 
export default App
