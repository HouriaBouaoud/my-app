import React, { useState } from "react";
import { TextField, Typography, Button,Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../components/auth/auth";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default connect(({ isLoading }) => ({ isLoading }), { login })(props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
    props.login({ email, password });
  };

  return (
    <form>
      <Typography variant="h5" style={{ marginBottom: 8 }}>
        Login
      </Typography>
      <div >
                        
                        <Grid container style = {{minHeight:'100vh'}}>
                                <Grid item xs={12} sm={6}>
                                    <img src ="https://source.unsplash.com/random" style={{width:'100%', high:'100%',objectFit:'cover'}} alt="brand" />

                                </Grid>
                            <Grid container item xs={12} sm={6} alignItems="center" direction="column" style={{padding:10}}>
                                <div />

                                <div style={{display:'flex' , flexDirection:'column', maxWidth: 600 , minWidth:500}}>
                                    <Grid container justify="center">
                                        <img src="https://brandslogos.com/wp-content/uploads/images/large/aiesec-logo.png" alt="logo " width ={300}/>

                                    </Grid>
                                
                                    <TextField 
                                        id = "email"
                                        variant="outlined"
                                        label="Email" 
                                        margin ="normal" 
                                        type = "email"
                                        required = "true"
                                        className="form-input"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        
                                       

                                    />

                                    <TextField
                                        id = "password"
                                        variant="outlined"
                                        label="Password"
                                        margin ="normal"
                                        type ="password"
                                        required ="true"
                                        className="form-input"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        

                                    />
                                    <div style={{ height:40 , display:"flex"}}/>
                                        <Button
                                            variant="contained"
                                            onClick={submitForm}
                                            className="form-input"
                                            >
                                            Login
                                        </Button>
                                    
                                        <Button>
                                            Interested in joining ?
                                        </Button>
                                    </div>
                                    <div style={{height: 60}}/>
                                    <Grid container justify="center">
                                        <Grid item>
                                            <Button>Go To Community page </Button>
                                        </Grid>
                                    </Grid>
                                    {(props.error || error) && (
                                      <Alert severity="error"  onClick={() => setError(null)}>
                                        {props.error || error}
                                      </Alert>
                                    )}
                                <div />
                            </Grid>


                        </Grid>
                    
                
                    </div>

     
    </form>
  );
});