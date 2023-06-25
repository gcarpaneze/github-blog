import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Header } from './components/Header'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Header />} path="/">
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/details/:id" />
      </Route>
    </Routes>
  )
}
