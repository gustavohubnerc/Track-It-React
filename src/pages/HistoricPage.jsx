import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function HistoricPage({user, progress}) {
    return (
        <>
        <Navbar user={user}/>
        <PageContainer>
            <Historic>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Historic>
        </PageContainer>
        <Footer progress={progress}/>
        </>
    )
}

const PageContainer = styled.div`
  height: 740px;
  width: 100vw;
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

