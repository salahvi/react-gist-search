import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserGistList } from "../actions/UserGistList";
import "../style/Home.css";
import ListItem from "../components/ListItem";
import EmptyItem from "../components/EmptyItem";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    let value = this.state.value;
    if (!value.trim()) {
      return;
    }
    this.props.getUserGists(value);
  }

  render() {
    const { data, isLoaded, isLoading } = this.props.userGistList;
    const isDataEmpty = data.length === 0;
    return (
      <div className="home-wrapper container-fluid">
        <div className="logo-container">
          <img src="/assets/logo.png" className="App-logo" alt="logo" />
        </div>
        <div className="content-wrapper">
          <div className="search-from">
            <form onSubmit={e => this.handleFormSubmit(e)}>
              <div class="form-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Gist users"
                  onChange={e => this.handleInputChange(e)}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="search-list">
            <ul>
              {isLoaded && isDataEmpty && <EmptyItem />}
              {isLoaded &&
                !isDataEmpty &&
                data.map(item => <ListItem item={item} key={item.id} />)}
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
