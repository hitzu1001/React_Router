import React, { Component } from 'react';
import "./CatDetails.css";
import { Link } from 'react-router-dom';


class CatDetails extends Component {
  render() {
    let { cat } = this.props;
    return (

      <div className="CatDetails row justify-content-center mt-5">
        <div className="col-10 col-lg-5">
          <div className="CatDetails-card card">
            <img className="card-img-top" src={cat.src} alt={cat.name} />
            <div className="card-body">
              <h2 className="card-title">{cat.name}</h2>
              <h4 className="card-subtitle text-muted">{cat.age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {cat.facts.map((fact, i) => (
                <li className="list-group-item" key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/cats" className="btn btn-info">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatDetails;
