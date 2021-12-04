import React, { useEffect } from "react";
import { useParams } from "react-router";

function Signup() {
  let { signinSlug } = useParams();

  useEffect(() => {
    // Fetch post using the signinSlug
  }, [signinSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5"> Signup </h1>
        <h6 className="mb-5">Enter details, {signinSlug}</h6>
        <p>
          Email/Mobile :
        </p>
        <p>
          Name:
        </p>
        <p>
          Password:
        </p>
        
      </div>
    </div>
  );
}

export default Signup;