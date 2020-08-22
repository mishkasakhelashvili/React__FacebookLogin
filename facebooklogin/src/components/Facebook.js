import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        email: '',
        picture: '',
    }

    responseFacebook = (res) => {
        this.setState({
            isLoggedIn: true,
            userID: res.userID,
            name: res.name,
            email: res.email,
            picture: res.picture.data.url
        })
    }

    componentClicked = () => {
        console.log('cliked')
    }

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = (
                <div style={{ width: "400px", margin: "auto", background: "#f4f4f4", padding: "20px" }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <p>welcome { this.state.name }</p>
                    <p>Email: { this.state.email }</p>
                </div>
            ) 
        }else{
            fbContent = (<FacebookLogin
                appId="1210508405963046"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
