import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, } from 'firebase/auth';
import { auth } from '../../src/Firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory(); 

    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log('User signed in:', user);
            history.push("/products")
            
          })
          .catch((error) => {
            console.error('Error signing in with Google:', error);
          });
    };
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                history.push("/products"); // Redirect to "/home" after successful login
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    

    return (
        <>
            <main className="center-content">
            <section className="login-section">
                <div className="login-container">
                    <p className="app-title">Molly Online Store</p>
                        <form>
                            <div className='input-filed'>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='input-filed'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        
                        <button onClick={handleSignInWithGoogle}>Sign In with Google</button>


                         <p className=" sign-up-text">
                            No account yet?
                            <Link to="/signup"> 
                                 Sign up 
                            </Link>
                        </p> 

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;
