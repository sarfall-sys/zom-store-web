import React, { createContext } from 'react'

export const  UiContext = createContext();

export const UiProvider  = ({children}) => {

    //Store viewed item ids in local state
    const [viewedItemIds, setViewedItemIds] = React.useState([]);
    

  return (
    <UiContext.Provider value={{}}>
      {children}
    </UiContext.Provider>
  )
}

