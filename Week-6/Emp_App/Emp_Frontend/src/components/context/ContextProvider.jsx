import { createContext, useState } from 'react'

// CREATE CONTEXT OBJECT
export const counterContextObj = createContext();

function ContextProvider({ children }) {

   // states
   const [counter, setCounter] = useState(0);

   // functions
   const changeCounter = () => {
      setCounter(prev => prev + 1);
   }
   return (
      <counterContextObj.Provider
         value={{
            counter,
            changeCounter,
         }}
      >
         {children}
      </counterContextObj.Provider>
   )
}

export default ContextProvider;