import { useState } from 'react'
import {Box} from '@chakra-ui/react' 
import CodeEditor from './Components/CodeEditor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"} bg={"#0f0a19"} color={"gray.500"} px={6} py={8}>
      <CodeEditor />
    </Box>
  );
}

export default App
