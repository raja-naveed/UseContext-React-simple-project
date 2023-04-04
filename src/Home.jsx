import React, { useContext } from "react";
import { Context } from "./Context";

const Home = () => {
  const { state } = useContext(Context);

  if (state && state.length) {
    return (
      <>
              <h1 className="font-bold text-center">Pizza fetching using UseContext</h1>

        <div className="flex justify-center">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {state.map((product) => (
              <div className="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-2" key={product.id}>
                <img className="w-full" src={product.image} alt={product.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.name}</div>
                  <p className="text-gray-700 text-base">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    console.log("products variable is undefined or empty");
    return null;
  }
};

export default Home;
