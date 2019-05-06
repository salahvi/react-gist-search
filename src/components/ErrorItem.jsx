import React from "react";

const ErrorItem = () => {
  return (
    <li>
      <div className="card">
        <div className="card-body">
          <div className="gist-item text-center">
            Gists Couldn't Load, Please try again later!
          </div>
        </div>
      </div>
    </li>
  );
};

export default ErrorItem;
