import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NewHabits from "../components/NewHabits"
import HabitCard from "../components/HabitCard"
import axios from "axios"
import { ProgressContext } from "../contexts/ProgressContext"


export default function HabitsPage({token, user}) {
    const [isLoading, setIsLoading] = useState(false);
    const [habits, setHabits] = useState([]);
    const [newCard, setNewCard] = useState(false);
    const [nameHabit, setNameHabit] = useState("");
    const [render, setRender] = useState(true);
    const [deleteHabit, setDeleteHabit] = useState(false);
    const { progress } = useContext(ProgressContext);
  
    useEffect(() => {
      const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
      const CONFIG = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.get(url, CONFIG);
      promise
        .then((response) => setHabits(response.data))
        .catch((error) => console.log(error));
    }, [habits, deleteHabit]);
  
    return (
      <>
        <Navbar data-test="header" user={user} />
        <PageContainer>
          <MyHabits>
            <h1>Meus hábitos</h1>
            <button data-test="habit-create-btn" onClick={() => setNewCard(!newCard)}>+</button>
          </MyHabits>
          {newCard ? (
            <NewHabits
              setNewCard={setNewCard}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              token={token}
              setRender={setRender}
              render={render}
              nameHabit={nameHabit}
              setNameHabit={setNameHabit}
            />
          ) : null}
          {habits.length > 0 ? (
            habits.map((habit) => (
              <HabitCard
                habit={habit}
                key={habit.id}
                token={token}
                setRender={setRender}
                render={render}
                deleteHabit={deleteHabit}
                setDeleteHabit={setDeleteHabit}
              />
            ))
          ) : (
            <NoHabits>
              <h1>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </h1>
            </NoHabits>
          )}
        </PageContainer>
        <Footer data-test="menu" progress={progress}/>
      </>
    );
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

const MyHabits = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    h1 {
        margin-left: 15px;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    button {
        width: 40px;
        height: 35px;
        margin-right: 15px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;;
        color: #FFFFFF;
        font-size: 27px;
    }
`
const NoHabits = styled.div`
    width: calc(100% - 35px);
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
        color: #666666;
    }
`