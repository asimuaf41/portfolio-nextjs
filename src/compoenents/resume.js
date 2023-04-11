import React from "react";
import "./resume.scss";

import {
  createFromIconfontCN,
  MobileOutlined,
  SafetyOutlined,
  FileDoneOutlined,
  FundProjectionScreenOutlined,CompassOutlined,SyncOutlined
} from "@ant-design/icons";
import { Progress } from "antd";
import { Steps, Divider } from 'antd';

const { Step } = Steps;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default function Resume() {
  return (
    <div className="home-page" style={{ height: "100%" }}>
      <div className="resume-page">
        <div className="main-heading">
          <h1>MY SKILLS</h1>
          <div className="main-heading-border">
            <div className="main-heading-border-sub"></div>
          </div>
        </div>
        <div className="skill-area">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">HTML5</div>
              <Progress percent={95} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">CSS3</div>
              <Progress percent={80} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">javascript</div>
              <Progress percent={90} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">jquery</div>
              <Progress percent={60} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">ReactJS</div>
              <Progress percent={100} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">React Native</div>
              <Progress percent={30} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">NodeJS</div>
              <Progress percent={70} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Sass</div>
              <Progress percent={90} status="active" />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Sass</div>
              <Progress percent={90} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">NextJs</div>
              <Progress percent={70} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">ExpressJs</div>
              <Progress percent={80} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Heroku</div>
              <Progress percent={90} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">AWS Amplify</div>
              <Progress percent={70} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">API Integration</div>
              <Progress percent={95} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">TypeScript</div>
              <Progress percent={70} status="active" />
            </div>



            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Analytical </div>
              <Progress percent={85} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Responsive design </div>
              <Progress percent={95} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Testing and debugging </div>
              <Progress percent={75} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Search engine optimization</div>
              <Progress percent={50} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Team Leading</div>
              <Progress percent={70} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Design Customization</div>
              <Progress percent={75} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">learning and improving</div>
              <Progress percent={80} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Communication</div>
              <Progress percent={75} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">Teaching</div>
              <Progress percent={70} status="active" />
            </div>
          </div>
        </div>
        <div className="main-heading">
          <h1>Resume</h1>
          <div className="main-heading-border">
            <div className="main-heading-border-sub"></div>
          </div>
        </div>
        <div className="Education-experience-area">
        <div className="Education-experience-area-heading">
      <i class="fa fa-graduation-cap"></i>  Educational Qualifications
</div>
<div className="education-detail-area">

    <Steps /* progressDot */ current={5} direction="vertical">
      <Step title={(<div className="step-title-education">
        <span className="step-year">  2020 - 2022&nbsp;&nbsp;&nbsp; </span>
        <span className="step-slash">   </span>
        <span className="step-title-second"> Cloud Native  Computing <div className="education-work-from">Presidential Initiative</div>  </span>
      </div>)} description={(<div className="step-detail-area">
       I am learning cloud native computing.   
      Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization.
      </div>)} />
      <Step title={(<div className="step-title-education">
        <span className="step-year">  2018 - 2019</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> Mobile and Web applications <div className="education-work-from">Saylani Mass I.T Traning  FSD</div>  </span>
      </div>)} description={(<div className="step-detail-area">
     I have learned many programing langaues in this course. I have learned web development in ReactJS javascript framework. I have learned NodeJs development that use in backend for both web and mobile applications. I have learned the mobile application development in React Native.
      </div>)}/>
      <Step  title={(<div className="step-title-education">
        <span className="step-year">  2015 - 2019</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> BS softwar engineering <div className="education-work-from">University of agriculture Faisalabad</div>  </span>
      </div>)} description={(<div className="step-detail-area">
     I have learned many programing langaues in this course. I have studied many software engineering subjests in this course. I have studied many engineering, computer and other subjects in this course. I have learned Respresnting something in the better way in this course.
      </div>)} />
      <Step  title={(<div className="step-title-education">
        <span className="step-year">  2013 - 2015</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> F.Sc Pre Engineering <div className="education-work-from">Government Degree College Shahkot</div>  </span>
      </div>)} description={(<div className="step-detail-area">
     I have studied the basic scientific principles in this course. I have learned how to exposure & education to the basic scientific enquiry. I have studied the basic scientific skills in the fields of Physic, Chemistry and Mathematics in this course
     .
      </div>)} />
      <Step  title={(<div className="step-title-education">
        <span className="step-year">  2011 - 2013</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> Matericulation(science) <div className="education-work-from">Government High School Chack 42/R.B</div>  </span>
      </div>)} description={(<div className="step-detail-area">
     I have studied the basic scientific principles and study the computer subject in this course. I have learned how to exposure & education to the basic scientific enquiry. I have studied the basic scientific skills in the fields of Physic, Chemistry and Mathematics in this course
     .
      </div>)} />
    </Steps>
</div>
        </div>
         <div className="Education-experience-area">
        <div className="Education-experience-area-heading">
      <i class="fa 	fa fa-suitcase"></i>  Working Experience
</div>
<div className="education-detail-area">

    <Steps /* progressDot */ current={5} direction="vertical">
    <Step icon={<SyncOutlined />} title={(<div className="step-title-education">
        <span className="step-year">  2021 - Present</span>
        <span className="step-slash">   </span>
        <span className="step-title-second"> Full Time Freelancer <div className="education-work-from">Top Rated plus at Upwork</div>  </span>
      </div>)} description={(<div className="step-detail-area">
      I am working on full time freelancer at upwork. I have completed many long term projects with 100% feedback.I am also working on many projects as a full stack developer.
      </div>)} />

      <Step  title={(<div className="step-title-education">
        <span className="step-year">  2019 - 2021 &nbsp; &nbsp;</span>
        <span className="step-slash">   </span>
        <span className="step-title-second"> ReactJS/MERN Stack developer <div className="education-work-from">BT Software house and AI technology</div>  </span>
      </div>)} description={(<div className="step-detail-area">
       I have worked on many projects in this company. I have worked on websites and admin panel and also working on the projects of this company. I mostly worked on ReactJs but now I also working on NodeJS. I mostly work on the maps in this company.
      </div>)} />
      <Step title={(<div className="step-title-education">
        <span className="step-year">  2019 - 2019</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> ReactJS developer <div className="education-work-from">FitOutFit Software Technologies</div>  </span>
      </div>)} description={(<div className="step-detail-area">
          In this company I work on the websites in ReactJS developement. I have worked with team work and also separately. In this company I also worked as SQA engineer for testing the project and quality improvement of the software.
      </div>)}/>
      <Step  title={(<div className="step-title-education">
        <span className="step-year">  2018 - 2019</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> Web developer  <div className="education-work-from">Ideasole technology</div>  </span>
      </div>)} description={(<div className="step-detail-area">
     I have worked in this as interny  and also learning in this company as web developer. I have worked on one website in this company. 
      </div>)} />
      <Step  title={(<div className="step-title-education">
        <span className="step-year">  2017 - 2018</span>
        <span className="step-slash1">   </span>
        <span className="step-title-second"> Personal/Freelance <div className="education-work-from">Personal practice /clients projects</div>  </span>
      </div>)} description={(<div className="step-detail-area">
      I have worked on many projects as personal projects and also work on small  clients projects. I also work on my final year project in MERN stack technology. 
      </div>)} />
    
    </Steps>
</div>
        </div>


          </div>
      <texture class="purple"></texture>
      <texture class="medium-blue"></texture>
      <texture class="light-blue"></texture>
      <texture class="red"></texture>
      <texture class="orange"></texture>
      <texture class="yellow"></texture>
      <texture class="cyan"></texture>
      <texture class="light-green"></texture>
      <texture class="lime"></texture>
      <texture class="magenta"></texture>
      <texture class="lightish-red"></texture>
      <texture class="pink"></texture>
    </div>
  );
}
