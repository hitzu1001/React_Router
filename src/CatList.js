import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CatList.css";

class CatList extends Component {
  render() {
    return (
      <div className="CatList">
        <h1 className="display-1 text-center mt-3 mb-5">Cat List!</h1>
        <div className="row justify-content-center">
          {this.props.cats.map(c => (
            <div className="Cat col-md-10 col-lg-4 text-center" key={c.name}>
              {/* <img src={c.src} alt={c.name} />
              <h3>
                <Link className="underline" to={`/cats/${c.name}`}>{c.name}</Link>
              </h3> */}
              <Link to={`/cats/${c.name}`}>
                <div>
                  <img src={c.src} alt={c.name} />
                </div>
                <h3 className="underline my-4">{c.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default CatList;
