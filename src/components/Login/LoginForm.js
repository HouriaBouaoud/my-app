import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/LockOutlined';

import validateInput from '../../Validation/LoginValidation';
import { InputAdornment } from '@material-ui/core';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { login } from '../../components/auth/auth';




class LoginForm extends Component{



        render()
        {
            const { errors, email, password, isLoading } = this.state;
        
            return(
                
                     <form onSubmit={this.onSubmit}>
                        { errors.form && <div className="alert alert-danger">{errors.form}</div> }
                    
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
                                        variant="outlined"
                                        label="Email" 
                                        margin ="normal" 
                                        type = "email"
                                        className="form-input"
                                        value={email}
                                        error={errors.email}
                                        onChange={e => setEmail(e.target.value)}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        margin ="normal"
                                        type ="password"
                                        className="form-input"
                                        value={password}
                                        error={errors.password}
                                        onChange={e => setPassword(e.target.value)}

                                    />
                                    <div style={{ height:40 , display:"flex"}}/>
                                        <Button
                                            variant="contained"
                                            onClick={submitForm}
                                            className="form-input"
                                            disabled = {isLoading}
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

                                <div />
                            </Grid>


                        </Grid>
                    
                
                    </div>
                    </form>
                    
              );

                

        }


}



export default  LoginForm;