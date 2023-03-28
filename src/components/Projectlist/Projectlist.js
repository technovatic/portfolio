import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="IMDB Clone API"
                description="IMDB Clone is clone of real IMDB Website where users can see the ratings, reviews and news of the respective films and it is an online database of information related to films, television series, podcasts, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews tech Stack Used in developing this IMDB Clone is made from ReactJS, React-Router Framework and IMDB API "
                ghLink="https://imdb-react-api.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Real Estate Website"
                description="Real Estate website where user can buy, purchase, search or rent a building, home, apartment and this is user friendly and user interactive real estate and the technology stack used in developing this project is ReactJS, Vercel, Github, React-Router DOM Framework, JSX (Javascript XML) and full view of this website is given below click the link given below"
                ghLink="https://react-real-estate-bble.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Amazon Prime Clone"
                description="Amazon Prime Video, also known simply as Prime Video, is an American subscription video on-demand over-the-top streaming and rental service of Amazon offered as a standalone service or as part of Amazon's Prime subscription. Technology Stack used in making this clone app are ReactJS, Firebase, Github, REST API and full view of this website is given below click the link given below"
                ghLink="https://prime-clone-e1de6.firebaseapp.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Pokemon API"
                description="Pokemon API is replice(i.e., Clone) of Famous Cartoon Show and techology stack used in development of this project are ReactJS, Vercel, Github, Pokémon API, Fetch API"
                ghLink="https://pokemon-api-lac-rho.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="React Music App"
                description="React Music App is where users can listen to their songs according to their interest and Technology Stack used in development of this App are ReactJS, Vercel, Github, NodeJS"
                ghLink="https://react-music-app-livid.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolistreact-delta.vercel.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist