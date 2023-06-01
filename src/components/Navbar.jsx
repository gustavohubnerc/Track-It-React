import styled from "styled-components"

export default function Navbar({user}){

    return(
        <>
        <Header>
            <h1>TrackIt</h1>
            <img src={user.image} alt="user-img" />
        </Header>
        </>
    )
}

const Header = styled.div`
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
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
    }
`