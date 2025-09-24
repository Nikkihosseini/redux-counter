import { Provider } from 'react-redux'
import { store } from './Component/store/store'
import Counter from './Component/Counter/Counter'
import './index.css'



function App() {
 
  return (
    <>
    <Provider store={store}>
      <Counter/>
    </Provider>
    </>
  )
}

export default App
