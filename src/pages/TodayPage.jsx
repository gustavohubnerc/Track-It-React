import styled from "styled-components"
import userImg from "../assets/userImg.png"
import ellipse from "../assets/ellipse.png"
import vector from "../assets/vector.png"

export default function TodayPage(){
    return(
        <>
        <Navbar>
            <h1>TrackIt</h1>
            <img src={userImg} alt="user-img" />
        </Navbar>
        <PageContainer>
            <Today>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Today>
            <HabitCard>
                <div className="habits">
                    <h1>Ler 1 capítulo de livro</h1>
                    <h2>Sequência atual: 3 dias</h2>
                    <h2>Seu recorde: 5 dias</h2>
                </div>
                <div className="check">
                    <img src={vector} alt="check" />
                </div>
            </HabitCard>
        </PageContainer>
        <Menu>
            <h1>Hábitos</h1>
            <img src={ellipse} alt="progress" />
            <h1>Histórico</h1>
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
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 20px;
    }
    img {
        margin-right: 20px;
    }
`

const Menu = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 22px;
        text-align: center;
    }
`
const Today = styled.div`
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

const HabitCard = styled.div`
    width: calc(100% - 35px);
    height: 95px;
    margin-top: 30px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    div.habits {
        margin-left: 15px;
        margin-top: 13px;
    }
    div.check {
        width: 69px;
        height: 69px;
        margin: 12px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
    h2 {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

`