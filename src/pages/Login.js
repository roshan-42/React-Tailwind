import React from "react";
import Layout from "../components/Layout";
import IMG from "../img.jpg";

function Login() {
  return (
    <Layout>
      <section className="bg-gray-100 flex min-h-screen items-center justify-center">
        <div
          id="child-container-1"
          className=" bg-gray-200 flex w-1/2 shadow-lg rounded-2xl p-5"
        >
          <div id="form-div" className="w-1/2 ">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-sm mt-4">
              If you are already a member, easily login
            </p>
          </div>

          <div id="img-div" className=" w-1/2 ">
            <img className=" rounded-2xl" src={IMG} alt="" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
