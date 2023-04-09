
import React, {createContext, useContext} from 'react'

const Main = createContext();
const MainContext = ({children}) => {
    
  return (
    <Main.Provider value = {{}}>
        {children}
    </Main.Provider>
  )
}

export default MainContext;
// <<<<<<< main
// export const MainState = () => useContext(Main);
// =======
export const MainState = () => {
  return useContext(Main);
};
// >>>>>>> main

