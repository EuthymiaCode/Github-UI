import React, { useReducer } from 'react'

const initialState = 'overview'

export const TabContext = React.createContext(initialState)

function TabReducer(state = initialState, { type, payload }) {
  return payload
}

export default function TabProvider({ children }) {
  const [selectedTab, dispatch] = useReducer(TabReducer, initialState)

  const setTab = (tab = 'overview') => {
    dispatch({
      payload: tab
    })
  }
  return (
    <TabContext.Provider value={{ selectedTab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}
