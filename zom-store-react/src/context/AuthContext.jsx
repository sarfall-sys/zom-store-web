import { createContext, useState, useContext, useEffect } from "react";
// Creating a React Context with default values and placeholder functions
// Creating a React Context with
export const AuthContext = createContext();

//Custom hook to use the context
//export const useAuth = () => useContext(AuthContext);
//Main context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true); //Start loading indicator

    try {
      //call the service
      const response = await authService.getUser();
      setUser(response);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    await authService.login(credentials);

    const response = await api.getUser(id);

    setUser(response.data);
    return response;
  };

  const logout = async () => {
    await authService.logout();

    setUser(null);
  };
    // useEffect runs once when component mounts (empty dependency array [])

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
