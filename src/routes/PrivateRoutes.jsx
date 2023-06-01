import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "../pages/HabitsPage";
import HistoricPage from "../pages/HistoricPage";
import TodayPage from "../pages/TodayPage.jsx";

export default function PrivateRoutes({token, user, progress}){

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/habitos"
                    element={<HabitsPage token={token} user={user} progress={progress}/>}
                />
                <Route
                    path="/historico"
                    element={<HistoricPage token={token} user={user} progress={progress}/>}
                />
                <Route
                    path="/hoje"
                    element={<TodayPage token={token} user={user} progress={progress}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}