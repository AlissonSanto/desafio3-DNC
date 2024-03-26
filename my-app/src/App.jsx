import { useState } from 'react'

import Header from './Elementos/Componentes/Header/Header'
import Presentatio from './Elementos/Componentes/Presentation/Presentation'
import Card from './Elementos/objects/Cards/Card'


import './App.css'

function App() {
  return (
    <div className="App">
        <Header/>    
        <Presentatio/>
        <Card/>
       

    </div>
  )
}

export default App;
