import { useState } from 'react'
import './App.css'
import { Text } from './Components/Text/Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Text
            textProps={{
              fontFamily : "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;",
              color : "white",
              size : "200px",
              weight : "50px",
              text : "string message"

            }}

          />

      </div>
    </>
  )
}

export default App
