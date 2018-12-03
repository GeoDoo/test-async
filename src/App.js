import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: ""
    };
  }

  componentDidMount() {
    try {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        this.setState({
          posts: response.data
        });
      });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
