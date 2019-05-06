import React from "react";

const ListItem = props => {
  const { item, isGistForkLoaded } = props;
  return (
    <li>
      <div className="card">
        <div className="card-body">
          <div className="gist-item">
            <div className="gist-details">
              <div className="file">
                <img
                  className="icon"
                  src="/assets/file.png"
                  alt="file"
                  width="20px"
                />
                {item.description}
              </div>
              <div className="languages">
                {Object.keys(item.files).map(
                  key =>
                    item.files[key].language && (
                      <span className="badge" key={key}>
                        {item.files[key].language}
                      </span>
                    )
                )}
              </div>
            </div>
            {isGistForkLoaded && item.forks && item.forks.length > 0 && (
              <div className="forks">
                <img
                  className="icon"
                  src="/assets/fork.png"
                  alt="fork"
                  width="20px"
                />
                {props.item.forks.map(forks => (
                  <a key={forks.id} href={forks.url} target="_blank">
                    <img
                      className="avatar"
                      src={forks.owner.avatar_url}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
