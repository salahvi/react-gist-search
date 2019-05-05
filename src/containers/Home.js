import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserGistList } from "../actions/UserGistList";
import "../style/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-wrapper container-fluid">
        <div className="logo-container">
          <img src="/assets/logo.png" className="App-logo" alt="logo" />
        </div>
        <div className="content-wrapper">
          <div className="search-from">
            <form onSubmit="">
              <div class="form-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Gist users"
                />
              </div>
            </form>
          </div>
          <div className="search-list">
            <ul>
              <li>items</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userGistList }) => ({
  userGistList
});

const mapDispatchToProps = dispatch => ({
  fetchUserGistList: bindActionCreators(fetchUserGistList, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
