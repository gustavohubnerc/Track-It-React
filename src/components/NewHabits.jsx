import styled from "styled-components"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import Weekdays from "./Weekdays"


export default function NewHabits({token, render, setRender, isLoading, setIsLoading, nameHabit, setNameHabit, setNewCard }) {
    const [ habitDays, setHabitDays ] = useState([]);
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];


    const postObj = {
        name: nameHabit,
        days: habitDays,
    };
    
    const CONFIG = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    function handleSubmit(e){
        e.preventDefault();
        if (nameHabit === ""){
            alert('Você precisa inserir o nome do hábito');
            return;
        }
        setHabitDays(habitDays.sort((a, b) => a - b));
        setIsLoading(true);
   
        const promise = axios.post(`${url}`, postObj, CONFIG);
        promise.then(() => {
            setNewCard(false);
            setRender(!render);
            setIsLoading(false);
        });
        promise.catch(() => {
            setIsLoading(false); 
        })
    }    

    return (
        <NewHabit onSubmit={handleSubmit} data-test="habit-create-container">
            <input 
                type="text" 
                placeholder="nome do hábito" 
                className="custom-input"
                onChange={(e) => setNameHabit(e.target.value)}
                value={nameHabit}
                data-test="habit-name-input"
                disabled={isLoading}
            >
            </input>
            <div className="days">
                {weekdays.map((day, index) => (
                    <Weekdays
                        key={index}
                        day={day}
                        index={index}
                        setHabitDays={setHabitDays}
                        habitDays={habitDays}
                        disabled={isLoading}
                        data-test="habit-day"
                    />    
                ))}
            </div>
            <div className="submit">
                <p data-test="habit-create-cancel-btn" onClick={() => setNewCard(false)}>Cancelar</p>
                {isLoading ? (
                    <ThreeDots
                        height="30"
                        width="30"
                        radius="9"
                        color="white"
                        ariaLabel="loading"
                        wrapperStyle={{}}
                        wrapperClass=""                      
                    />
                ) : (
                    <button data-test="habit-create-save-btn" type="submit">Salvar</button>
                )}
            </div>
        </NewHabit>
    )
}

const NewHabit = styled.form`
    width: calc(100% - 35px);
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input.custom-input {
        width: 340px;
        height: 45px;
        margin-top: 18px;
        margin-bottom: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        box-sizing: border-box;
        padding: 10px;
        background: #ffffff;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        ::placeholder {
            color: #DBDBDB;
        }
    }
    div.days {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin-top: 10px;
        margin-left: 30px;
    }
    div.submit {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 25px;
        margin-right: 30px;
        p {
            color: #52B6FF;
            font-family: Lexend Deca;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            text-align: center;
        }
        button {
            width: 84px;
            height: 35px;
            margin-left: 20px;
            background: #52B6FF;
            color: #FFFFFF;
            border-radius: 5px;
            border: none;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
        }
    }
`