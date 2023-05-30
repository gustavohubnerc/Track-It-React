import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from "styled-components"
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HabitsPage from './pages/HabitsPage'
import TodayPage from './pages/TodayPage'
import HistoricPage from './pages/HistoricPage'


export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoricPage />} />
      </Routes>
    </BrowserRouter>
  )
}

