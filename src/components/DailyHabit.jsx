import styled from "styled-components"
import axios from "axios"
import { useState } from "react"

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
        <Container>
        <HabitDiv
          checked={checked}
          highestSequence={highestSequence}
          currentSequence={currentSequence}
        >
          <h1>{name}</h1>
          <p>
            Sequência atual:
            <span> {currentSequence} </span>
            dias
          </p>
          <p>
            Seu recorde: <span>{highestSequence} </span>
            dias
          </p>
        </HabitDiv>
        <Icon onClick={() => handleClick(checked)} checked={checked}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </Icon>
      </Container>
    )
}    

const Container = styled.div`
  height: 740px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 5px;
  padding: 10px;
  background: #E5E5E5;
`

const HabitDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  h1 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  p {
    font-size: 13px;
    margin-bottom: 5px;
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
  width: 25%;
  height: auto;
  background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
  border-radius: 5px;
  cursor: pointer;
  ion-icon {
    width: 100%;
    height: 100%;
    color: white;
  }
`