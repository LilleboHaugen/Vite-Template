import React from "react"

interface AppProps {
  // Define your props here
}

console.log("Hei")

export const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}
