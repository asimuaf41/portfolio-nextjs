import React from "react";
import "./resume.scss";

import { createFromIconfontCN, SyncOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { Steps, Divider } from "antd";

const { Step } = Steps;
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
              <div className="skill-heading">NextJs</div>
              <Progress percent={80} status="active" />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">ReactJS</div>
              <Progress percent={100} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">React Redux/Zustand</div>
              <Progress percent={90} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading"> Tailwind CSS</div>
              <Progress percent={80} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading"> ShadCN-UI</div>
              <Progress percent={80} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading"> Tanstack/React Query</div>
              <Progress percent={80} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">HTML5</div>
              <Progress percent={95} status="active" />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">javascript</div>
              <Progress percent={90} status="active" />
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
              <div className="skill-heading">Third Party UI libraries</div>
              <Progress percent={70} status="active" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="skill-heading">NestJs</div>
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
            <i class="fa fa-graduation-cap"></i> Educational Qualifications
          </div>
          <div className="education-detail-area">
            <Steps /* progressDot */ current={5} direction="vertical">
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year">
                      {" "}
                      2020 - 2022&nbsp;&nbsp;&nbsp;{" "}
                    </span>
                    <span className="step-slash"> </span>
                    <span className="step-title-second">
                      {" "}
                      Cloud Native Computing{" "}
                      <div className="education-work-from">
                        Presidential Initiative
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    I have learned cloud-native computing, which focuses on
                    building and deploying applications as microservices using
                    open-source software stacks. Each component is packaged into
                    its own container and dynamically orchestrated—typically
                    with tools like Kubernetes—to ensure scalability,
                    resilience, and efficient resource utilization.
                  </div>
                }
              />
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2018 - 2019</span>
                    <span className="step-slash1"> </span>
                    <span className="step-title-second">
                      {" "}
                      Mobile and Web applications{" "}
                      <div className="education-work-from">
                        Saylani Mass I.T Traning FSD
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    I have gained proficiency in multiple programming languages
                    and technologies through my learning journey. I specialized
                    in web development using ReactJS, a powerful JavaScript
                    library for building dynamic user interfaces. On the
                    backend, I learned Node.js, which I’ve used to develop
                    scalable APIs for both web and mobile applications.
                    Additionally, I have hands-on experience in mobile
                    application development using React Native.
                  </div>
                }
              />
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2015 - 2019</span>
                    <span className="step-slash1"> </span>
                    <span className="step-title-second">
                      {" "}
                      BS software Engineering{" "}
                      <div className="education-work-from">
                        University of agriculture Faisalabad
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    Throughout this course, I have gained knowledge in various
                    programming languages and studied a wide range of subjects,
                    including software engineering, computer science, and core
                    engineering disciplines. The curriculum also emphasized the
                    importance of presenting ideas and solutions effectively,
                    helping me develop strong communication and problem-solving
                    skills.
                  </div>
                }
              />
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2013 - 2015</span>
                    <span className="step-slash1"> </span>
                    <span className="step-title-second">
                      {" "}
                      F.Sc Pre Engineering{" "}
                      <div className="education-work-from">
                        Government Degree College Shahkot
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    As part of this course, I developed a strong foundation in
                    scientific principles through exposure to core scientific
                    inquiry and methodologies. I studied essential concepts and
                    skills in Physics, Chemistry, and Mathematics, which
                    enhanced my analytical thinking and problem-solving
                    abilities.
                  </div>
                }
              />
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2011 - 2013</span>
                    <span className="step-slash1"> </span>
                    <span className="step-title-second">
                      {" "}
                      Matriculation(science){" "}
                      <div className="education-work-from">
                        Government High School Chack 42/R.B
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    In this course, I studied fundamental scientific principles
                    along with core computer science subjects. I gained valuable
                    exposure to scientific inquiry and developed foundational
                    skills in Physics, Chemistry, and Mathematics, enhancing
                    both my analytical and technical problem-solving
                    capabilities.
                  </div>
                }
              />
            </Steps>
          </div>
        </div>
        <div className="Education-experience-area">
          <div className="Education-experience-area-heading">
            <i class="fa 	fa fa-suitcase"></i> Working Experience
          </div>
          <div className="education-detail-area">
            <Steps /* progressDot */ current={5} direction="vertical">
              <Step
                icon={<SyncOutlined />}
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2021 - Present</span>
                    <span className="step-slash"> </span>
                    <span className="step-title-second">
                      {" "}
                      Full Time Freelancer{" "}
                      <div className="education-work-from">
                        Top Rated plus at Upwork
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    I am a full-time freelancer on Upwork, specializing in
                    full-stack development. I have successfully completed
                    numerous long-term projects, consistently earning 100%
                    positive feedback. I’m currently working on several
                    projects, delivering high-quality solutions as a full-stack
                    developer.
                  </div>
                }
              />

              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year">
                      {" "}
                      2019 - 2021 &nbsp; &nbsp;
                    </span>
                    <span className="step-slash"> </span>
                    <span className="step-title-second">
                      {" "}
                      ReactJS/MERN Stack developer{" "}
                      <div className="education-work-from">
                        BT Software house and AI technology
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    I have contributed to multiple projects in this company,
                    including websites and admin panels. While my primary focus
                    has been on ReactJS, I am now also actively working with
                    NodeJS. A significant part of my work involves developing
                    map-based features and integrations.
                  </div>
                }
              />
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2019 - 2019</span>
                    <span className="step-slash1"> </span>
                    <span className="step-title-second">
                      {" "}
                      ReactJS developer{" "}
                      <div className="education-work-from">
                        FitOutFit Software Technologies
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    At this company, I worked on website development using
                    ReactJS, both independently and as part of a team. I also
                    contributed as an SQA Engineer, focusing on project testing
                    and improving software quality.
                  </div>
                }
              />
              <Step
                title={
                  <div className="step-title-education">
                    <span className="step-year"> 2018 - 2019</span>
                    <span className="step-slash1"> </span>
                    <span className="step-title-second">
                      {" "}
                      Web developer{" "}
                      <div className="education-work-from">
                        Ideasole technology
                      </div>{" "}
                    </span>
                  </div>
                }
                description={
                  <div className="step-detail-area">
                    I worked as an intern at this company, where I gained
                    hands-on experience as a web developer. During my time
                    there, I contributed to the development of a website and
                    enhanced my practical skills.
                  </div>
                }
              />
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
