import styled from "styled-components"
import axios from "axios"
import dump from "../assets/dump.svg"

export default function HabitCard({habit, setDeleteHabit, deleteHabit}) {
    const token = localStorage.getItem("Token");
    const { id, name, days } = habit;
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const checkDay = (day, index) => {
        if (days.includes(index)) {
          return (
            <Day selected={true} key={index}>
              {day}
            </Day>
          );
        } else {
          return (
            <Day selected={false} key={index}>
              {" "}
              {day}
            </Day>
          );
        }
    };

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    function handleDelete() {
     
      if (window.confirm("Você tem certeza que quer apagar esse hábito?")) {
        const promise = axios.delete(URL, CONFIG);
        promise.then(() => setDeleteHabit(!deleteHabit));
      }
    }
  

    return (
        <PageContainer data-test="habit-container">
            <div>
              <p data-test="habit-name">{name}</p>
              <button data-test="habit-delete-btn" onClick={handleDelete}>
                  <img src={dump} alt="deletar hábito"/>
              </button>
            </div>
            <div>{weekdays.map((day, index) => checkDay(day, index))}</div>
        </PageContainer>   
    )
}   

const Day = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: 25px;
    margin-right: 25px;
    p {
      display: flex;
      font-family: 'Lexend Deca';
      font-size: 20px;
      flex-wrap: wrap;
    }
  }
  
`;