import React from "react"

interface AppProps {
  // Define your props here
}

let test = "Hello"

test = 10

console.log(test)

export const App: React.FC<AppProps> = () => {
  return <div className="App">App</div>
}
