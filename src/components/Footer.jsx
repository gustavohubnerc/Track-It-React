import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer({progress}){
    return (
        <Menu>
            <Link to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <Link to="/hoje">
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
            </Link>
            <Link to="/historico">
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
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 22px;
        text-align: center;
    }
    img {
        width: 110px;
        margin-bottom: 70px;
    }
    a {
        text-decoration: none;
    }
`