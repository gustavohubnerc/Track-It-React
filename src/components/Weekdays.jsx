import styled from "styled-components"
import { useState } from "react"

export default function Weekdays({ day, habitDays, setHabitDays, index }) {
  const [selectedDays, setSelectedDays] = useState(false);

  function handleClick() {
    setSelectedDays(!selectedDays);
    if (habitDays.includes(index)) {
      const removeDays = habitDays.filter((element) => element !== index);
      setHabitDays(removeDays);
    } else {
      setHabitDays([...habitDays, index]);
    }
  }

  const PageContainer = styled.button`
    width: 30px;
    height: 30px;
    color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
    background-color: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
    font-size: 20px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-left: 4px;
  `;

  return (
    <PageContainer
      data-test="habit-day"
      selected={selectedDays}
      onClick={handleClick}
    >
      {day}
    </PageContainer>
  );
}

