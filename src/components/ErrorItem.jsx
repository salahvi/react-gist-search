import React from "react";

const ErrorItem = () => {
  return (
    <li>
      <div className="card">
        <div className="card-body">
          <div className="gist-item text-center">
            Gists Failed to Load, Please try again later!
          </div>
        </div>
      </div>
    </li>
  );
};

export default ErrorItem;
