import styled from "styled-components"
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import { UserContext } from "../contexts/UserContext"
import { TokenContext } from "../contexts/TokenContext"


export default function LoginPage() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    const { setUser } = useContext(UserContext);
    const { setToken } = useContext(TokenContext);

    const postObj = {
        email: email,
        password: password
    }
 
    function userLogin(e){
        e.preventDefault();
        const promise = axios.post(`${URL}`, postObj);
        setIsLoading(true);
        promise.then((response) => {
            console.log(response);
            setUser({ name: `${response.data.name}`, image: `${response.data.image}`});
            if (response.status === 200){
                setToken(response.data.token);
                setIsLoading(false);
                navigate("/hoje");
            }
        })
        promise.catch((error) => {
            alert(error.response.data.message);
            setIsLoading(false);
        })
    }

    return(
        <PageContainer>
            <img src={logo} alt="logo" />
            <FormContainer onSubmit={userLogin}>
                <input 
                    type="email" 
                    placeholder="email" 
                    className="custom-input"
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    data-test="email-input"
                />
                <input
                    type="password"
                    placeholder="senha"
                    className="custom-input"
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    data-test="password-input"
                />
                <button data-test="login-btn" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots
                            height="70"
                            width="70"
                            radius="9"
                            color="white"
                            ariaLabel="loading"
                            wrapperStyle={{}}
                            wrapperClass=""                      
                        />
                    ) : (
                        "Entrar"
                    )}
                </button>
            </FormContainer>
            <Link data-test="signup-link" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </PageContainer>
    );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  a {
    font-family: 'Lexend Deca';
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
  }
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

    :disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
  }
  button {
    width: 300px;
    height: 45px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    background: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;  

    :disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
  }
`