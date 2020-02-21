import React, { Component } from 'react';
import BlockstackContext from 'react-blockstack/dist/context';
import { BlockstackButton } from 'react-blockstack-button';

// Demonstrating BlockstackContext for legacy React Class Components.

export default class Landing extends Component {
  static contextType = BlockstackContext;
  render() {
    const { signIn } = this.context;
    return (
      <div className="Landing">
        <div className="jumbotron jumbotron-fluid pt-3 mb-0">
          <div className="container">
            <div className="panel-landing text-center mt-3">
              <h1 className="landing-heading">ELLA MORELLI</h1>
              <p className="lead">
                A Computer Science Student just trying to get along.
              </p>

              <p className="alert alert-info  border-info">
                Ella Morelli is a cool enby
                </a>{' '}
                living their{' '}
                <strong>
                  &nbsp;&nbsp;best life.
                </strong>
              </p>

              <div className="card mt-4 border-info">
                <div className="card-header">
                  <h5 className="card-title">About Ella</h5>
                </div>
                <div className="row">
                  <div className="col col-md-6 p-4 text-right border-right">
                    <a
                      href="https://www.linkedin.com/in/gmorelli37/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ella Morelli
                    </a>{' '}
                    is a Barnard Computer Science and Visual Art student located in NY, NY. &nbsp;
                  </div>
                  <div className="col col-md-6 p-4 text-left border-left">
                    <a
                      href="https://www.linkedin.com/in/gmorelli37/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Placeholder Area
                    </a>{' '}
                    what is over here.
                  </div>
                </div>
              </div>

              <div className="card mt-4 border-info">
                <div className="card-header">
                  <h5 className="card-title">Ella's placeholder</h5>
                </div>
                <div className="card-body">
                  <p className="card-text mb-3 mt-4 mx-5 px-5">
                    Placeholder Text, &nbsp;Yay,&nbsp;Wohoo.
                  </p>
                </div>

                <p className="card-link mb-5">
                  <BlockstackButton onClick={signIn} />
                </p>

                <div className="card-footer text-info">
                  <strong>
                    email me @ gnm2123@barnard.edu
                  </strong>
                </div>
              </div>

              <div className="card mt-4  border-info">
                <div className="card-header">
                  <h5 classNme="card-title">Check out my LinkedIn</h5>
                </div>
                <div className="card-body">
                  <a
                    className="btn btn-secondary p-0"
                    type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/gmorelli37/"
                  >
                    <img
                      src="/proxy/www.netlify.com/img/deploy/button.svg"
                      alt="&nbsp;Deploy to Netlify&nbsp;"
                    />
                  </a>
                </div>
                <div className="card-footer">
                  This web-app made using Blockstack.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
