const { createContext, useContext, useState } = require('react');

const AuthContext = createContext();

function AuthProvider(props) {
    const [userInfo,setUserInfo] = useState(null)

    console.log(userInfo);
  
    const value = {userInfo,setUserInfo};
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error("Can't use useAuth outside of AuthProvider");
    return context;
}

export { useAuth, AuthProvider };
