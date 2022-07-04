import React, { useState } from "react";
import Userinfo from "./../Userinfo";
import PersonalData from "./../Personalinfo";
import UserData from "./../Userdata";
import useFormFields from "./../Hooks/CustomHook";
import { createContext } from "react";
import Country from "../Country";
import validate from './Validationrules';
export const UserContext = React.createContext();

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const signup = () => {
    console.log(`User Created!
    Name: ${inputs.firstName} ${inputs.lastName}`);
    // console.log('No errors, submit callback called!');
  };
  const { inputs, errors, handleInputChange, handleSubmit } = useFormFields(signup, validate);
  // const [tabs,setTabs]=
  const tabs = [
    {
      id: 1,
      tabTitle: "User Information",
      title: "UserInfo"
    },
    {
      id: 2,
      tabTitle: "Personal Details",
      title: "Personal Details",
    },
    {
      id: 3,
      tabTitle: "User Data",
      title: "User Data",
    },
    {
      id: 4,
      tabTitle: "Country",
      title: "Country",
    }
  ];

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };
  console.log(currentTab);
  return (
    <>
      {/* <div className="tabs">
        {console.log("4444", currentTab)}
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className="title">{tab.component}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div> */}
      <UserContext.Provider value={{ inputs }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            disabled={currentTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
        {currentTab === 1 && (
          <Userinfo setCurrentTab={setCurrentTab} currentTab={currentTab} data={{ inputs, errors, handleInputChange, handleSubmit }} />
        )}
        {currentTab === 2 && (
          <PersonalData setCurrentTab={setCurrentTab} currentTab={currentTab} data={{ inputs, errors, handleInputChange, handleSubmit }} />
        )}
        {currentTab === 3 && (
          <UserData setCurrentTab={setCurrentTab} currentTab={currentTab} />
        )}
        {currentTab === 4 && (
          <Country setCurrentTab={setCurrentTab} currentTab={currentTab} />
        )}
      </UserContext.Provider>
    </>
  );
};

export default Tabs;
