import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [userInfo, setUserInfo] = useState({
    id: null,
    lastname: null,
    firstname: null,
    email: null,
    phonenumber: null,
    linkedinlink: null,
    githublink: null,
    city: null,
    activeSearch: null,
    postalcode: null,
    CV: null,
    avatar: null,
  });
  const [mySpace, setMySpace] = useState("profile");

  const context = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      userInfo,
      setUserInfo,
      mySpace,
      setMySpace,
    }),
    [searchValue, setSearchValue, userInfo, setUserInfo, mySpace, setMySpace]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;

export { Context };
const UserInfoShape = {
  id: propTypes.number,
  lastname: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  phonenumber: propTypes.string,
  linkedinlink: propTypes.string,
  githublink: propTypes.string,
  city: propTypes.string,
  postalcode: propTypes.number,
  activeSearch: propTypes.number,
  CV: propTypes.string,
  avatar: propTypes.string,
};

Provider.propTypes = {
  children: propTypes.shape({
    searchValue: propTypes.string,
    setSearchValue: propTypes.string,
    userInfo: propTypes.shape(UserInfoShape),
    setUserInfo: propTypes.shape(UserInfoShape),
    mySpace: propTypes.string,
    setMySpace: propTypes.string,
  }).isRequired,
};
