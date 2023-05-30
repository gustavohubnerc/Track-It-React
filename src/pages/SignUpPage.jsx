import styled from "styled-components"
import logo from "../assets/logo.png"

export default function SignUpPage() {
    return (
        <PageContainer>
            <img src={logo} alt="logo" />
            <FormContainer >
                <input type="email" placeholder="email" className="custom-input"/>
                <input type="password" placeholder="senha" className="custom-input"/>
                <input type="text" placeholder="nome" className="custom-input"/>
                <input type="url" placeholder="foto" className="custom-input"/>
                <button type="submit">Cadastrar</button>
            </FormContainer>
            <Login>Já tem uma conta? Faça login!</Login>
        </PageContainer>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input.custom-input {
    width: 300px;
    height: 45px;
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
  button {
    width: 300px;
    height: 45px;
    margin-bottom: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    background: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;  
  }
`

const Login = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`

