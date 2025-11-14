import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  // eslint-disable-next-line no-undef
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');
  const copyToClipboard = useCallback(()=> { 
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);}, [Password]);
  const passwordRef = useRef(null);

  const Passwordgenerator = useCallback(() => {
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass="";
    if(numAllowed){
      str+="0123456789";
    }
    if(charAllowed){
      str+="!@#$%^&*()_+";
    }
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    Passwordgenerator();
  }, [length, numAllowed, charAllowed, Passwordgenerator]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
            value={Password} 
            className='w-full px-3 py-2 outline-none bg-gray-700 text-white'
            placeholder='Password'
            ref={passwordRef}
            readOnly />
          <button  
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div >
          <div flex text-sm gap-x-2>
            <input type='range'
              min="8"
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer border-none '
            />
            <label> Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => setNumAllowed((prev => !prev))}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div><div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => setCharAllowed((prev => !prev))}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
