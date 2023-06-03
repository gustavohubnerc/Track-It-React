import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import DailyHabit from "../components/DailyHabit"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { ProgressContext } from "../contexts/ProgressContext"

export default function TodayPage({token, user, progress}){
    const [habits, setHabits] = useState([0]);
    const [render, setRender] = useState(false);
    const { setProgress } = useContext(ProgressContext);
    const day = dayjs().locale("pt-br").format("dddd, DD/MM");

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const CONFIG = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };

    function handleProgress() {
        let cont = 0;
        for (let i = 0; i < habits.length; i++) {
          if (habits[i].done) {
            cont++;
          }
        }
        let result=0;
        result = cont / habits.length;
        return Math.floor(result * 100);
    }
    
    useEffect(() => {
        setProgress(handleProgress);
    }, [habits]);
    
    useEffect(() => {
        const promisse = axios.get(`${url}`, CONFIG);
        promisse.then((e) => {
            setHabits(e.data);
        });
        promisse.catch(() => alert("Algo deu errado, tente novamente mais tarde."));
    }, [render]);

    return(
        <>
        <Navbar data-test="header" user={user}/>
        <PageContainer>
            <Today>
                <h1 data-test="today">{day}</h1>
                {progress === 0 ? (
                    <h2 data-test="today-counter">Nenhum hábito concluído ainda</h2>
                ) : (
                    <p data-test="today-counter"><span>{progress}% dos hábitos concluídos</span></p>
                )}
                
            </Today>
            {habits.map((habit) => (
                <DailyHabit
                habit={habit}
                key={habit.id}
                token={token}
                setRender={setRender}
                render={render}   
                />
            ))}            
        </PageContainer>
        <Footer data-test="menu" progress={progress}/>
        </>
    )
}

const PageContainer = styled.div`
  height: 740px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  background: #E5E5E5;
`

const Today = styled.div`
    width: calc(100% - 35px);
    height: 50px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1 {
        font-family: Lexend Deca;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    h2 {
        font-family: 'Lexend Deca';
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }

`