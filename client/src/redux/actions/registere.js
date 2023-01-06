export const registere = (uid, name) => ({
  type: "REGISTERE",
  uid,
  name
});

export const startRegistere = (name,email,password) => {
  return async (dispatch) => {
    const response = await fetch("https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/users/", {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     cache: "no-cache",
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({name,email,password}) 
   })
   const json = response.json()
   if(response.ok){
    console.log("success Login")
    //console.log("token",response.headers("x-auth-token"))    
     dispatch(
            registere(email,name)
            );
   }else{
    console.log("error in login")
    console.log(response.ok)
    console.log(JSON.stringify({name,email,password}))
  }    
  };
};