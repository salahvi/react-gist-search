import React from "react";

const EmptyItem = props => {
  return (
    <li>
      <div className="card">
        <div className="card-body">
          <div className="gist-item text-center">
            {props.error ? props.error : "No public gists found for this user!"}
          </div>
        </div>
      </div>
    </li>
  );
};

export default EmptyItem;
