import styled from "styled-components"
import logo from "../assets/logo.png"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"

export default function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileName, setProfileName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    const navigate = useNavigate();

    const postObj = {
      email: email,
      name: profileName,
      image: profilePicture,
      password: password,
    };

    function submitUserData(e){
        e.preventDefault();
        setIsLoading(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const promise = axios.post(URL, postObj);
        promise.finally(() => {
            setIsLoading(false);
          });
        promise.then((response) => {
            console.log(response);
            if (response.status === 201){
                alert('Usuário cadastrado!');
                navigate("/");
            }
        })
        promise.catch((error) => {
            alert(error.response.data.message);
        })
    }

    return (
        <PageContainer>
            <img src={logo} alt="logo" />
            <FormContainer onSubmit={submitUserData} >
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
                <input 
                    type="text" 
                    placeholder="nome" 
                    className="custom-input"
                    onChange={(e) => setProfileName(e.target.value)}
                    disabled={isLoading}
                    data-test="user-name-input"
                />
                <input 
                    type="url" 
                    placeholder="foto" 
                    className="custom-input"
                    onChange={(e) => setProfilePicture(e.target.value)}
                    disabled={isLoading}
                    data-test="user-image-input"
                />
                <button data-test="signup-btn" type="submit" disabled={isLoading}>
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
                        "Cadastrar"
                    )}
                </button>
            </FormContainer>
            <Link data-test="login-link" to="/">Já tem uma conta? Faça login!</Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  a {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
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

