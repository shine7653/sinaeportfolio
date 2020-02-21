import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ReEducation from "./ReEducation";
import ReExperience from "./ReExperience";


export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://avatars0.githubusercontent.com/u/54830877?s=460&v=4"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Sinae Kim</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>(214) 753-9862</p>
            <h5>Email</h5>
            <p>shinekim7653@gmail.com</p>
            <h5> Address</h5>
            <p>403 Roy St, Seattle WA 98109</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

        {/* --------------------------------------- */}
          <Cell className="resume-right-col" col={8}>

          <h2> Work Experience </h2>
            <ReExperience
              startMonth="April"
              startYear={2008}
              endMonth="Sep"
              endYear={2015}
              jobTitle="Assistant Manager (Seoul, Korea)"
              jobName="Korea Inclusive Finance Agency(Smile MicroCredit Bank)"
              jobDescription1="Provided an efficient service for the head of department"    
              jobDescription2=" Professionally maintaining office environment" 
              jobDescription3=" Provided courteous and caring customer service" 

            />
            <ReExperience
              startMonth="Sep"
              startYear={2001}
              endMonth="Jan"
              endYear={2003}
              jobTitle="Interior Desinger (Seoul, Korea)"
              jobName="Design Studio"
              jobDescription1="Complete Cad Drawing in apartment design"
              jobDescription2="Efficient liaison with construction department"
              jobDescription3="Additional skills in graphics in presentation" 
            />
            <ReExperience
              startMonth="Jan"
              startYear={2001}
              endMonth="Aug"
              endYear={2001}
              jobTitle="Cad Assistant (Seoul, Korea)"
              jobName="Yoon Interiors"
              jobDescription1="Designing in diverse spaces: Sauna, Offices, etc."

            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h3> Education </h3>
            <ReEducation
              startMonth="Sep"
              startYear={2019}
              endMonth="Present"
            //   endYear={2001}
              schoolTitle="FullStack Development Coding Bootcamp (Seattle, US)"
              schoolName="University of Washington"
              schoolDescription1="Created several Web Application"
              schoolDescription2="Skilled in HTML/CSS, Javascript, MySQL, MongoDB, NodeJS, Github"
            />
            <ReEducation
              startMonth="Sep"
              startYear={2016}
              endMonth="Jun"
              endYear={2017}
              schoolTitle="Hair Design (Vancouver, Canada)"
              schoolName="Vancouver Community College"
              schoolDescription1="Positive and serious attitude to the subject"
              schoolDescription2="Assessed clients' needs and provided proper suggestion"
            />
            <ReEducation
              startMonth="Mar"
              startYear={2006}
              endMonth="Aug"
              endYear={2008}
              schoolTitle="Metal Artwork (Seoul, Korea)"
              schoolName="Hong-ik University"
              schoolDescription1="Postgraduate study in metal art"
            />
            <ReEducation
              startMonth="Mar"
              startYear={1996}
              endMonth="Feb"
              endYear={2000}
              schoolTitle="Interior Design (Seoul, Korea)"
              schoolName="Ga-chon University"
              schoolDescription1="Bachelor's Degree in interior design"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />


          </Cell>
        </Grid>
      </div>
    );
  }
}
