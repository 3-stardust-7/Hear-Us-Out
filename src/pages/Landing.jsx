import React from 'react';
// import {envelope} from './src/assets/envelope-paper.svg'

const Landing = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5bu33Z6wMz8hTxkcbPhYZQ4eFnuObJfrOA&s"
                alt="Bootstrap"
                width="84"
                height="80"
            />
            </a>
        </div>
      </nav>

      <div className="px-4 pt-5 my-5 text-center border-bottom container">
        <h1 className="display-4 fw-bold text-body-emphasis">HearUsOut</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Whether it’s a broken road, power outage, or unresolved complaint, we make reporting problems easy
            and ensure they reach the right authorities. Track updates in real time, support
            community issues, and be part of the solution—because every problem deserves action.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
              Get Started!
            </button>
          </div>
        </div>
      </div>

      {/* Centering the entire row of three components */}
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" style={{ width: "4rem", height: "4rem", borderRadius: "0.75rem" }}>
              <svg className="bi" width="1em" height="1em">
                {/* <use xlinkHref={envelope} /> */}
              </svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
              sentence and probably just keep going until we run out of words.
            </p>
          </div>

          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" style={{ width: "4rem", height: "4rem", borderRadius: "0.75rem" }}>
              <svg className="bi" width="1em" height="1em">
                {/* <use xlinkHref={envelope} /> */}
              </svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
              sentence and probably just keep going until we run out of words.
            </p>
          </div>

          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" style={{ width: "4rem", height: "4rem", borderRadius: "0.75rem" }}>
              <svg className="bi" width="1em" height="1em">
                {/* <use xlinkHref={envelope} /> */}
              </svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
              sentence and probably just keep going until we run out of words.
            </p>
          </div>
        </div>
      </div>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#twitter" />
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram" />
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>

    </>
  );
}

export default Landing;
