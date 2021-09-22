import React, {useEffect} from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import NoSearch from "./components/no-search";
import useGithub from "./hooks/github-hooks";

function App0() {
  return (
    <main>      
        <Layout>
          <Profile />
          <Repositories />
        </Layout>      
    </main>
  );
}

const App = () => {
  const { githubState } = useGithub();

  
  console.log(githubState);    
  

  return (        
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>        
  );
};

export default App;
