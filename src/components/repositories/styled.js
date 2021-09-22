import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 2px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`  
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;  
  margin: 8px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);    
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  //padding: 16px;      
  margin-top: 0;
  display: none;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  &.is-selected {
    display: inline-block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;