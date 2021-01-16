import React, {Component} from 'react';

class LoginPage extends Component {
   

    render() { 
        return ( 
            <div>
                <form onSubmit={this.logIn}>
                    <label htmlFor="">Podaj login<input type="text"/></label>
                    <label htmlFor="" >Podaj hasło<input type="password" /></label>
                    <button>Zaloguj</button>
                </form>
            </div>
         );
    }
}
 
export default LoginPage;
 
