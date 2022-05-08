import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;
    @keyframes animate{
    0%{
      background-color: #f00;;
    }
    50%{
      background-color: rgb(197, 141, 141);
    }
    100%{
      background-color: #f00;
    }
  }  
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: #ddd;
    border: 2px solid red;
    background-color: rgba(255,0,0, 0.3);    
    padding: 20px;
    border-radius: 10px;
    animation: animate 1s linear infinite;
  }
`;
