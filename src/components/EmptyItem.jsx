import React from "react";

const EmptyItem = () => {
  return (
    <li>
      <div className="card">
        <div className="card-body">
          <div className="gist-item text-center">No Gists Found!</div>
        </div>
      </div>
    </li>
  );
};

export default EmptyItem;
