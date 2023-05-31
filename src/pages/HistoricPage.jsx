import styled from "styled-components"
import userImg from "../assets/userImg.png"
import ellipse from "../assets/ellipse.png"
import { Link } from "react-router-dom"

export default function HistoricPage() {
    return (
        <>
        <Navbar>
            <h1>TrackIt</h1>
            <img src={userImg} alt="user-img" />
        </Navbar>
        <PageContainer>
            <Historic>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Historic>
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
  font-family: 'Lexend Deca';
  h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`

const Historic = styled.div`
    width: calc(100% - 35px);
    height: 50px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1 {
        font-family: Lexend Deca;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    h2 {
        font-family: 'Lexend Deca';
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
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
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 20px;
    }
    img {
        margin-right: 20px;
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
