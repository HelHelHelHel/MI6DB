import React from 'react';
export default class PeopleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(response => {
            // console.log(response.data.token)
            if (response.data.token) {
                this.props.success(response.data.token)
            }
        })
    }
    
   render() {
       return (
           <>
               <form method="post" onSubmit={this.handleSubmit}>
        
                    <div className="form-group">
                        <label htmlFor="">Email</label><br/>
                        <input className="form-control" type="text" name="email" value={this.state.email} placeholder="email" onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label><br/>
                        <input className="form-control" type="text" name="password" value={this.state.password} placeholder="password" onChange={this.handlePasswordChange}/>
                    </div>
            
                    <button type="submit" className="btn btn-primary">Sign up</button>
        
                </form>
            </>
       );
   }
}