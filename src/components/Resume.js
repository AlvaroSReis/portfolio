import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Cursando</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p> {item.Information}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Conhecimentos</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

          </div>
          

        </div>

      </section>
    );
  }
}