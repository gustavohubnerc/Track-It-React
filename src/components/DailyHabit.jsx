import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import check from "../assets/vector.png"

export default function TodayHabit({ habit, token, setRender, render }) {
    const { id, name, done, currentSequence, highestSequence } = habit;
    const [checked, setChecked] = useState(done);

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";
    
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    function handleClick(a) {
        if (!checked) {
          const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            null,
            CONFIG
          );
          promise.then((e) => {
            if (e.status == 204) {
              setChecked(true);
              setRender(!render);
            }
          });
          promise.catch(() =>
            alert("Algo deu errado, tente novamente mais tarde")
          );
        } else {
          const promise = axios.post(
            `${url}/habits/${id}/uncheck`,
            null,
            CONFIG
          );
          promise.then((e) => {
            setChecked(false);
            setRender(!render);
          });
        }
    }
    return (
        <Container data-test="today-habit-container">
          <HabitContainer>
            <HabitDiv
              checked={checked}
              highestSequence={highestSequence}
              currentSequence={currentSequence}
            >
              <h1 data-test="today-habit-name">{name}</h1>
              <p>
                Sequência atual:
                <span data-test="today-habit-sequence"> {currentSequence} </span>
                dias
              </p>
              <p>
                Seu recorde: <span data-test="today-habit-record">{highestSequence} </span>
                dias
              </p>
            </HabitDiv>
            <Icon data-test ="today-habit-check-btn" onClick={() => handleClick(checked)} checked={checked}>
              <img src={check} alt="check"/>
            </Icon>
            </HabitContainer>  
        </Container>
    )
}    

const Container = styled.div`
  height: 740px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 5px;
  padding: 10px;
  background: #E5E5E5;
`

const HabitContainer = styled.div`
  width: 370px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const HabitDiv = styled.div`
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: left;
  margin-left: 15px;
  h1 {
    font-family: Lexend Deca;
    font-size: 20px;
    margin-bottom: 8px;
    color: #666666;
  }
  p {
    font-family: Lexend Deca;
    font-size: 13px;
    margin-bottom: 5px;
    color: #666666;
    span {
      color: ${(props) => (props.checked ? "#8FC549" : "#666666")};
      color: ${(props) =>
        props.highestSequence === props.currentSequence
          ? "#8FC549"
          : "#666666"};
    }
  }
`

const Icon = styled.div`
  margin-right: 10px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
  border-radius: 5px;
  cursor: pointer;
`  