import React from "react";
import { formatDate } from "../helpers/Date";
import FileList from "./FileList";

const ListItem = props => {
  const { item, isGistForkLoaded, forkError } = props;
  const updatedAt = formatDate(item.updated_at);
  return (
    <li>
      <div className="card">
        <div className="card-body">
          <div className="gist-item">
            <a href={item.html_url} className="gist-details">
              <img
                className="avatar"
                src={item.owner.avatar_url}
                alt="Prfile"
                width="50px"
                height="50px"
              />
              <div className="content">
                <p className="time">Last Active {updatedAt}</p>
                <p className="text-bold">{item.description}</p>
                {!item.description && (
                  <p>
                    <i className="text-muted">No Desciption</i>
                  </p>
                )}
                <ul className="files">
                  {Object.keys(item.files).map(key => (
                    <FileList
                      item={item.files[key]}
                      key={item.files[key].filename}
                    />
                  ))}
                </ul>
              </div>
            </a>
            {!isGistForkLoaded && item.forkFetchError && (
              <i className="forks text-small">{item.forkFetchError}</i>
            )}
            {isGistForkLoaded && (
              <div className="forks text-small">
                <span className="pt5">
                  Recent Forks{" "}
                  <svg
                    viewBox="0 0 10 16"
                    version="1.1"
                    width="10"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    />
                  </svg>
                </span>
                {item.forks &&
                  item.forks.length > 0 &&
                  props.item.forks.map(forks => (
                    <a
                      className="forks-item"
                      key={forks.id}
                      href={forks.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="avatar"
                        src={forks.owner.avatar_url}
                        alt=""
                        width="30px"
                        height="30px"
                      />
                    </a>
                  ))}
                {(!item.forks || item.forks.length === 0) && (
                  <i className="pt5">&nbsp;0</i>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
