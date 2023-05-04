import { User } from "."

function App<FC>({ name, age }: User) {
   return (
      <>
       <h1>Hello world</h1>
       {name}, {age}
      </>
   );
};



export default App
