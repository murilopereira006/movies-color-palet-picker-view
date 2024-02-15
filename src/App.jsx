import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ColorsRetanguloDisplayer from "./components/ColorPaletPicker"

const coresHex = [
  "#FF5733", // Laranja vibrante
  "#FFC300", // Amarelo vibrante
  "#FF0066", // Rosa vibrante
  "#33FF33", // Verde vibrante
  "#FF33FF", // Roxo vibrante
  "#33FFFF", // Azul vibrante
  "#FF3300", // Vermelho vibrante
  "#00FF33", // Verde limão vibrante
  "#FF3399", // Magenta vibrante
  "#33FF00", // Verde claro vibrante
  "#FF6600", // Laranja escuro vibrante
  "#00FF66", // Verde claro vibrante
  "#FF6600", // Laranja escuro vibrante
  "#00FF66", // Verde claro vibrante
  "#6600FF", // Roxo escuro vibrante
  "#00FFFF", // Ciano vibrante
  "#FF0066", // Rosa vibrante
  "#66FF00", // Verde limão vibrante
  "#FF6699", // Rosa claro vibrante
  "#FF00FF", // Magenta vibrante
  "#99FF00", // Verde limão vibrante
  "#FF9933", // Laranja vibrante
  "#00FF99", // Verde claro vibrante
  "#FF9933", // Laranja vibrante
  "#00FF99", // Verde claro vibrante
  "#9933FF", // Roxo vibrante
  "#66FFFF", // Ciano vibrante
  "#FF33CC", // Rosa vibrante
  "#00FFCC"  // Ciano claro vibrante
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <ColorsRetanguloDisplayer arrayOfColors={coresHex} />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
