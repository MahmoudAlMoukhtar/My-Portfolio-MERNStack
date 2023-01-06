
export const login = (uid,isAdmin) => ({
  type: "LOGIN",
  uid,
  isAdmin
});

export const startLogin = (email,password) => {
  return async (dispatch) => {    
    const response = await fetch("https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/login/", {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     cache: "no-cache",
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({email,password}) 
   })
   const json = await response.json()
   if(response.ok){
    console.log("success Login")    
    localStorage.setItem('user',JSON.stringify(json))
     dispatch(
            login(json.token,json.isAdmin)
            );
   }else{
    console.log("error in login")
    console.log(response.ok)
  }    
  };
};

export const logout = () => ({
  type: "LOGOUT",
  
});

export const startLogout = () => {
  return (dispatch) => {
      localStorage.removeItem('user');
      dispatch(logout());
  }
}; 
