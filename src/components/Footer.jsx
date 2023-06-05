import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom"

export default function Footer({progress}){
    const navigate = useNavigate();

    return (
        <Menu data-test="menu">
            <Link data-test="habit-link" to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <div data-test="today-link" onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={progress}
                    text={"Hoje"}
                    background
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                    })}
                />
            </div>    

            <Link data-test="history-link" to="/historico">
                <h1>Histórico</h1>
            </Link>
        </Menu>
    )
}

const Menu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
    background-color: #FFFFFF;
    h1 {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 22px;
        text-align: center;
    }
    a {
        text-decoration: none;
    }
    div {
        width: 130px;
        height: 130px;
    }
`