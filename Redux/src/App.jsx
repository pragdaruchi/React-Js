import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import Crud from './component/Crud'
import Counter from './component/Counter'
import ApiData from './component/ApiData'
  
export default function App() {
  return (
    <div>
      <Provider  store={store}>
        {/* <Counter/> */}
         {/* <Crud/> */}
         <ApiData/>
      </Provider>
    </div>
  )
}