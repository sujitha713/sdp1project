import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://th.bing.com/th/id/OIP.nz4nsD-NU40ZfflJE4ymswHaEV?w=293&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light"> Already have an account,</h1>
              <p>
                 Login :
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Signin;