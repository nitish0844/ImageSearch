import React from "react";

class SearchBar extends React.Component {
  state = { term: "programming" };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div
        className="ui segment"
        style={{
          backgroundColor: "#144d49",
        }}
      >
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="field">
            <label style={{ color: "#fff" }}>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
