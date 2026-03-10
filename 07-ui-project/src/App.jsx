import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

  const users = [
    {
     img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'blue',
     tag:'Satisfied'
     },
     {
     img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
     intro:'',
     color:'green',
     tag:'Underserved'
     },
     {
     img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
     intro:'',
     color:'seagreen',
     tag:'Underbanked'
     },
      {
     img:'https://images.unsplash.com/photo-1696960493371-2cbb7d31f80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzMHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'purple',
     tag:'Underbacked'
     },
     {
      img:'https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2OHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'pink',
      tag:'Average'
     }
  ]
  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
      
    </div>
  )
}

export default App