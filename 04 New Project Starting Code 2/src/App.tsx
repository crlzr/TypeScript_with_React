import Input  from "./components/Input";
import Button from './components/Button.tsx'
import Container from "./components/Container.tsx";
import { useRef } from "react";
import Form from "./components/FormComponent.tsx";


function App() {
  //const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {name: string; age: string} // convert type that TS knows when we know better than TS, objects because key-value pairs
    console.log(extractedData)
  }
  return <main>

  <Form onSave={handleSave}>
    <Input type="text" id="name" label="Name" name="name"></Input>
    <Input type="number" id="age" label="Age" name="age"></Input>
    <p>
      <Button el="button" type="submit">Save</Button>
    </p>
  </Form>

    {/* <Input id="name" label="Your Name" type='text'></Input>
    <Button el="button">A Button</Button>
    <Input id="age" label="Your Age" type='number'></Input>
    <Button el="link" href="https://google.com">A Link</Button>
    <Input id="Container" label="Container"></Input>
    <Container as={Button} el="button">Click me</Container>
    <Input id="test" label="test" ref={input} /> */}

  </main>
}

export default App;
