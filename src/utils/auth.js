export const isAuthenticated = () => {
    const token = sessionStorage.getItem('jwtToken');
    return token !== null && token !== undefined;
  };
  