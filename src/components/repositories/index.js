import React, {useEffect, useState} from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";
import RepositoryItem from "../repository-item";
import "./style.css";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);
  const [display, setDisplay] = useState('none');
  
  useEffect(()=>{
    if (githubState.repositories == 0){
      //setDisplay('none');
      //console.log("aaaa"+display);
    } else {
      //setDisplay('block');
      //console.log("ssss"+display);
    }
  }, []);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories); 
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel className="wrapperTabPanel" >
            <S.WrapperList className="wrapperList">
              {githubState.repositories.map((item) => (
                <RepositoryItem  className="repoItem"                
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>          
          <S.WrapperTabPanel className="wrapperTabPanel">
            <S.WrapperList className="wrapperList">
              {githubState.starred.map((item) => (
                <RepositoryItem className="repoItem"
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
