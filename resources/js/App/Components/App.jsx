import React from 'react';
import PeopleList from './PeopleList.jsx';
import LoginForm from './LoginForm.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logged_in: null,
            token: window.localStorage.getItem('_token')
        }
    }
    
    componentDidMount(){
        if(this.state.token){
            this.setState({
                logged_in: true
            })
        } else {
            this.setState({
                logged_in: false
            })
        }
    }

    onLoginSuccess = (token) => {
        // console.log(token);
        window.localStorage.setItem('_token', this.props.token);
     
        this.setState({
            logged_in: true,
            token: token
        })
    }
    

    
   render() {
       console.log(this.state.logged_in);
       if(this.state.logged_in === null){
           return 'Loading...'
       }else if(this.state.logged_in === true){
           return <PeopleList token={this.state.token} /> 
       }else{
           return (
               <>
               <h1>Login form</h1>
               <LoginForm token={this.state.token} success={this.onLoginSuccess} submit={this.handleSubmit}/>
               </>
           )
       }
   }
}