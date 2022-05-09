import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";

interface User{
  username: string
  age: number
  hobbies: string[]
}

export const users: User[]= [
  {
    username: 'john',
    age: 15,
    hobbies: ['Football', 'Coding']
  },
  {
    username: 'jane',
    age: 23,
    hobbies: ['Reading', 'Writing']
  }
]


function App() {

  const [subdomain, setSubDomain] = useState<string>('');

  useEffect(() => {
    const host = window.location.host;
    const arr = host
      .split(".")
      .slice(0, host.includes('localhost') ? -1 : -2);
    // change for domain
    if (arr.length > 0) setSubDomain(arr[0])

  }, [])

  const requestedUser = users.find(user => user.username === subdomain);

  return (
    <>
      {
        requestedUser
          ? <Hero
            username={requestedUser.username}
            age={requestedUser.age}
            hobbies={requestedUser.hobbies} />
          : <NotFound/>
      }
    </>
  )
}

export default App
