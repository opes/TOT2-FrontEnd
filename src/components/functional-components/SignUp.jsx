import React from 'react';
import GoogleLogin from 'react-google-login';

const SignUp = () => {
// THIS IS WHERE OUR HOOK GOES

  return (
    <div>
      <GoogleLogin className="button"
        clientId={process.env.CLIENT_GOOGLE_ID}
        buttonText="Signup using Google"
        onSuccess={ (token) => {console.log(token); } }
        onFailure={ (response) => console.log(response)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default SignUp;
