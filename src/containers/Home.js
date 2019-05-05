import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserGistList } from "../actions/UserGistList";
import "../style/Style.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/assets/logo.png" className="App-logo" alt="logo" />
        </header>
        <div>
          <form onSubmit="">
            <div class="form-group">
              <input
                type="text"
                className="search"
                placeholder="Search Gist users"
              />
            </div>
          </form>
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
