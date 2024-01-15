const { createContext, useContext, useState } = require('react');

const AuthContext = createContext();

function AuthProvider(props) {
    const [userInfo,setuserInfo] = useState({

    })
    const value = {userInfo,setuserInfo};
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
    const context = useContext(AuthContext);
    if (context === 'undefined') throw new Error('Can\t put context outside of AuthProvider');
    return context;
}

export { useAuth, AuthProvider };
