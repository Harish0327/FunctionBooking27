import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Arrow from '../Components/Arrow'
import Mad from '../Components/Mad'
import Ele from '../Components/Ele'
export default function Root() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Ele></Ele>}></Route>
        <Route path='mad/' element={<Mad></Mad>}></Route>
        <Route path='ele/'  element={<Arrow></Arrow>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}
