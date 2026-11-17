import React, { Component } from "react";
import Article from "../elements/Article";

class Articles extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    const devTo = "https://dev.to/api/articles?username=balop3e";

    fetch(devTo)
      .then(response => {
        if (!response.ok) throw new Error("Could not load articles");
        return response.json();
      })
      .then(data => {
        let articles = [];
        data = data.slice(0, 4);
        data.forEach((element, index) => {
          articles.push(
            <div className="column" key={index}>
              <Article
                key={index}
                title={element.title}
                url={element.url}
                image={element.cover_image}
                extract={element.description}
              />
            </div>
          );
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          articles.push(<div className="column" key={`empty-${i}`}></div>);
        }
        this.setState({ articles: articles });
      })
      .catch(() => {
        this.setState({ articles: [] });
      });
  }

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <div className="portfolio-section-intro">
            <h2 className="title">Articles</h2>
            <a className="portfolio-text-link" href="https://dev.to/balop3e">
              All articles on DEV <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default Articles;
