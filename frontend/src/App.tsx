import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <div style={{ flex: 1, display: 'flex' }}>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
