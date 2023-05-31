import styled from "styled-components"
import userImg from "../assets/userImg.png"
import ellipse from "../assets/ellipse.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function HabitsPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);

    const postObj = {
        name: name,
        days: days
    }

    function createHabit(e){
        e.preventDefault();
        setIsLoading(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const promise = axios.post(URL, postObj);
        promise.finally(() => {
            setIsLoading(false);
          });
        promise.then((response) => {
            console.log(response);
            if (response.status === 201){
                alert('Habito cadastrado!');
                navigate("/");
            }
        })
        promise.catch((error) => {
            alert(error.response.data.message);
        })
    }

    return (
        <>
        <Navbar>
            <h1>TrackIt</h1>
            <img src={userImg} alt="user-img" />
        </Navbar>
        <PageContainer>
            <MyHabits >
                <h1>Meus hábitos</h1>
                <button>+</button>
            </MyHabits>
            <NewHabit>
                <input type="text" placeholder="nome do hábito" className="custom-input"></input>
                <div className="days">
                    <StyledButton>D</StyledButton>
                    <StyledButton>S</StyledButton>
                    <StyledButton>T</StyledButton>
                    <StyledButton>Q</StyledButton>
                    <StyledButton>Q</StyledButton>
                    <StyledButton>S</StyledButton>
                    <StyledButton>S</StyledButton>
                </div>
                <div className="submit">
                    <p>Cancelar</p>
                    <button>Salvar</button>
                </div>
            </NewHabit>
            <NoHabits>
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            </NoHabits>
        </PageContainer>
        <Menu>
            <Link to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <Link to="/hoje">
                <img src={ellipse} alt="progress" />
            </Link>
            <Link to="/historico">
                <h1>Histórico</h1>
            </Link>
        </Menu>
        </>
    )
}

const PageContainer = styled.div`
  height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  background: #E5E5E5;
`

const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1 {
        font-family: Playball;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 20px;
    }
    img {
        margin-right: 20px;
    }
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

const Menu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
    }
    img {
        margin-bottom: 40px;
    }
    a {
        text-decoration: none;
    }
`

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

const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    color: #D4D4D4;
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
