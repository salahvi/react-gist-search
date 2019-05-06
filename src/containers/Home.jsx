import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserGistList, fetchGitForks } from "../actions/UserGistList";
import "../style/Home.css";
import ListItem from "../components/ListItem";
import EmptyItem from "../components/EmptyItem";
import ErrorItem from "../components/ErrorItem";
import Loader from "../components/Loader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidUpdate(prevProps) {
    const { data, isLoaded, isGistForkLoaded } = this.props.userGistList;
    if (prevProps.userGistList.data !== data && isLoaded && !isGistForkLoaded) {
      data.map(item => {
        this.props.fetchGitForks(item.id);
      });
    }
  }

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    let value = this.state.value;
    if (!value.trim()) {
      return "";
    }
    this.props.fetchUserGistList(value);
  }

  render() {
    const {
      data,
      isLoaded,
      isLoading,
      hasError,
      isGistForkLoaded
    } = this.props.userGistList;
    const isDataEmpty = data.length === 0;
    return (
      <div className="home-wrapper container-fluid">
        <div className="logo-container">
          <img src="/assets/logo.png" className="App-logo" alt="logo" />
        </div>
        <div className="content-wrapper">
          <div className="search-form">
            <form
              onSubmit={e => this.handleFormSubmit(e)}
              className="form-inline"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Gist users"
                  onChange={e => this.handleInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="search-list">
            <Loader show={isLoading} />
            <ul>
              {isLoaded && isDataEmpty && <EmptyItem />}
              {hasError && !isLoading && <ErrorItem />}
              {isLoaded &&
                !isDataEmpty &&
                data.map(item => (
                  <ListItem
                    item={item}
                    isGistForkLoaded={isGistForkLoaded}
                    key={item.id}
                  />
                ))}
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
  fetchUserGistList: bindActionCreators(fetchUserGistList, dispatch),
  fetchGitForks: bindActionCreators(fetchGitForks, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
