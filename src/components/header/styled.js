import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 16px;
    width: 100%;
    height: 36px;
    padding: 8px 8px 8px 16px;
    font-weight: 500;

    &:hover, &:focus {      
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    }
  }

  button {
    background-color: #225ed8;
    width: 200px;
    //padding: 8px 16px;
    margin: 0 16px;
    border-radius: 16px;
    color: #fff;
    text-align:center;
    &:hover, &:focus {
      background-color: white;
      border: 2px solid #225ed8;
      color: #225ed8;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    }

    span {
      font-weight: bold;      
    }
  }
`;
