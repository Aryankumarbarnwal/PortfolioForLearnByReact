import React from 'react';
import project from './data/projects.json';

const Project = () => {
  return (
    <div className="container Projects my-3" id='project'>
      <h1>PROJECTS</h1>

      <div className="row d-flex justify-content-center align-item-center">
        {project.map((data) => (
          <div 
            key={data.key} // Use data.key instead of data.id
            className="my-5 col-sm-6 col-md-4 col-lg-3 mx-4"
            data-aos="flip-left"
            data-aos-duration="1000">
            <div
              className="card bg-dark text-light"
              style={{ border: "1px solid yellow", padding: "10px", boxShadow: "5px 5px 10px 10px rgba(132, 201, 69, 0.5)" }}>
              <div className="img d-flex justify-content-center align-item-center">
                <img
                  src={data.imageSrc || 'default-image.jpg'}
                  className="card-img-top wd-18rem"
                  alt={data.title || 'Project Image'}
                  style={{ border: "1px solid yellow", width: "200px" }}
                />
              </div>
              <div className="card-body" style={{ textAlign: "center" }}>
                <h5 className="card-title">{data.title || 'Untitled Project'}</h5>
                <p className="card-text">{data.description || 'No description available.'}</p>
                <a href={data.demo}
                  className="btn btn-primary mx-2"
                  style={{ textDecoration: "none", color: "white" }}>
                  Demo
                </a>
                <a href={data.source}
                  className="btn btn-warning"
                  style={{ textDecoration: "none", color: "white" }}>
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
