import React from "react";

function Article(props) {
  return (
    <div className="card article">
      <div className="card-header">
        <a href={props.url} target="blank">
          <h3 className="card-header-title">{props.title}</h3>
        </a>
        <a
          href={props.url}
          target="blank"
          className="card-header-icon"
          aria-label="Dev Community"
        >
          <span className="icon">
            <i className="fab fa-2x fa-dev"></i>
          </span>
        </a>
      </div>
      {props.image && (
        <div className="card-image">
          <figure className="image">
            <img width="1000" height="420" src={props.image} alt="" loading="lazy" />
          </figure>
        </div>
      )}
      <div className="card-content">
        <div className="content">
          <p>{props.extract}</p>
        </div>
        <a href={props.url} target="blank">
          Read the full article
        </a>
      </div>
    </div>
  );
}

export default Article;
