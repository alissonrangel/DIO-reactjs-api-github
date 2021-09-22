import React from "react";
import * as S from "./styled";
import "./style.css";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper className="wrapper">
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>{fullName}</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
