import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user ="Muhammad Arslan Abbas" age ={22} img='https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="Muhammad Furqan Abbas " age={23} img ='https://media.istockphoto.com/id/1166162497/photo/modern-blue-sports-car-3d-render.jpg?s=612x612&w=is&k=20&c=It9NArBTR3fVlNJf4nGbwOnLQGrHhs55ja9S_UYrOqM='/>
      <Card user="Muhammad Sufyan Abbas " age={25} img ='https://media.istockphoto.com/id/1410770159/photo/front-view-glossy-red-sport-car-concept-model.jpg?s=612x612&w=is&k=20&c=BxOi2iTP4qu4Ypnql4nq4O3e1Xx5FxMQUai7kd3dATg='/>
      
      </div>
      
  )
}

export default App