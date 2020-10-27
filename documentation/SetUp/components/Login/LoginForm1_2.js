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
import { login } from '../../Actions/LoginAction';




class LoginForm extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
          email: '',
          password: '',
          errors: {},
          isLoading: false
        };
        /**
         * Constroctur Functions
         */
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
      /**
       * Validation Form
       */
        isValid() 
        {
            const { errors, isValid } = validateInput(this.state);
        
            if (!isValid) {
            this.setState({ errors });
            }
        
            return isValid;
        }
    
        onSubmit(e) 
        {
            e.preventDefault();
            if (this.isValid()) 
            {
                this.setState({ errors: {}, isLoading: true });
                this.props.login(this.state).then(
                    (res) => this.context.router.push('/'),
                    (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
                );
            }
        }
    
        onChange(e) 
        {
            this.setState({ [e.target.name]: e.target.value });
        }


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
                                        value={email}
                                        error={errors.email}
                                        onChange={this.onChange}
                                        inputProps={{startAdornment:(<InputAdornment position="start"><AccountCircleIcon/></InputAdornment>),}}
                                    />

                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        margin ="normal"
                                        type ="password"
                                        value={password}
                                        error={errors.password}
                                        onChange={this.onChange}
                                        inputProps={{startAdornment:(<InputAdornment position="start"><VpnKeyIcon/></InputAdornment>),}}

                                    />
                                    <div style={{ height:40 , display:"flex"}}/>
                                        <Button
                                            variant="contained"
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

LoginForm.prototype = 
{
    Login: PropTypes.func.isRequired
}

LoginForm.contextType = 
{
    router: PropTypes.object.isRequired

}


export default connect (null,{login})(LoginForm)