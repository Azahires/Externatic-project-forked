import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [userInfo, setUserInfo] = useState({
    lastname: null,
    firstname: null,
    email: null,
    id: null,
  });

  const context = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      userInfo,
      setUserInfo,
    }),
    [searchValue, setSearchValue, userInfo, setUserInfo]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;
export { Context };
const UserInfoShape = {
  lastname: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  id: propTypes.number,
};

Provider.propTypes = {
  children: propTypes.shape({
    searchValue: propTypes.string,
    setSearchValue: propTypes.string,
    userInfo: propTypes.shape(UserInfoShape),
    setUserInfo: propTypes.shape(UserInfoShape),
  }).isRequired,
};
