import { useState, useEffect } from 'react';

function useLocalStorage(token = null) {
  const [ state, setState ] = useState(() => {
    // console.debug("token in hook ", localStorage.getItem("token"));
    let result = localStorage.getItem("token");
    console.debug("result is ", result, typeof result);
    if (result === "null") return null;
    return result;
  });

  useEffect( () => {
    console.debug("localstorage effect state", state, typeof state);
    // NOTE: token only replaced in localStorage with new token
    // and is manually reset to null in App logout instead of effect here

    if (state !== null) {
      localStorage.setItem("token", state);
    }

    
  }, [state]);

  return [ state, setState ];
}


export default useLocalStorage;