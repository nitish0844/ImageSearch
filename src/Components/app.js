import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./search.js";
import ImageList from "./imageList.js";
import ImageGif from "./Image.gif";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#144d49" }}>
        <div className="ui container">
          <img className="gif" src={ImageGif} alt="Image-gif" />
          <SearchBar
            onSubmit={this.onSearchSubmit}
            style={{ backgroundColor: "#144d49" }}
          />
          <ImageList
            images={this.state.images}
            style={{ backgroundColor: "#144d49" }}
          />
        </div>
      </div>
    );
  }
}

export default App;
