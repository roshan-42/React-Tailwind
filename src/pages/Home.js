import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Home Page
        </button>
      </div>
    </Layout>
  );
}

export default Home;
