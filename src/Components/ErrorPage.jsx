import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div>
        <img
          className="object-cover h-96"
          src="/assets/notfound.png"
          alt="hello"
        />
      </div>
      <div className="text-3xl">Sorry this page does not exist</div>
      <h2>404 </h2>
      <p>
        Either the page is not designed by the developer or the page does not
        exist{" "}
      </p>
    </div>
  );
};

export default ErrorPage;
