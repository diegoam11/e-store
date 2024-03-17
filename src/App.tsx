import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './Router'
import { CategoriesContextProvider } from './context/categories.context'

export const App = () => {
  return (
    <BrowserRouter>
      <CategoriesContextProvider>
          {<AppRouter />}
      </CategoriesContextProvider>
    </BrowserRouter>
  )
}
