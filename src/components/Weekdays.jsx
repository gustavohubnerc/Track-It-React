import styled from "styled-components"
import { useState } from "react"

export default function Weedays({day, habitDays, setHabitDays, index}){
    const [ selectedDays, setSelectedDays ] = useState(false);

    function handleClick(){
        setSelectedDays(!selectedDays);
        if (!selectedDays){
            setHabitDays([...habitDays, (index)]);
        } else {
            setHabitDays(habitDays.filter(element => element !== index));
        }
    }

    return(
        <PageContainer data-test="habit-day" onClick={handleClick} selectedDays={selectedDays}>
            {day}
        </PageContainer>
    )
}

const PageContainer = styled.button`
    width: 30px;
    height: 30px;
    color: ${(props) => (props.selected ? "white" : "#DBDBDB")};
    background-color: ${(props) => (props.selected ? "#CFCFCF" : "white")};
    font-size: 20px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-left: 4px;
`