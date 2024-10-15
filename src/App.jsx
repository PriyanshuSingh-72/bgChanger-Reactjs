import { useState } from 'react'



function App() {
  const [color,setColor] = useState("olive")

  return (
   <div 
   style={{backgroundColor: color}}
   class="w-full h-screen ">

    <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2 ">
    <div class="flex gap-5 justify-center bg-white px-3 py-2 rounded ">
      <button 
      onClick={()=> setColor("red")}
      class="w-full bg-red-500 rounded-full px-4 py-2">red</button>
      <button 
      onClick={()=> setColor("green")}
      class="w-full bg-green-500 rounded-full px-4 py-2">green</button>
      <button 
      onClick={()=> setColor("blue")}
      class="w-full bg-blue-500 rounded-full px-4 py-2">blue</button>
      <button 
      onClick={()=> setColor("purple")}
      class="w-full bg-purple-500 rounded-full px-4 py-2">purple</button>
      <button 
      onClick={()=> setColor("black")}
      class="w-full bg-black rounded-full px-4 py-2 text-white">black</button>
      <button 
      onClick={()=> setColor("white")}
      class="w-full bg-white rounded-full px-4 py-2">white</button>
      <button 
      onClick={()=> setColor("yellow")}
      class="w-full bg-yellow-500 rounded-full px-4 py-2">yellow</button>
    </div>
    </div>

   </div>
  )
}

export default App
