import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import {MainDiv, ProjectsHeadline, Container, ProjectsGrid, ShowAll} from './styles'

const Projects = (props) => (
    <MainDiv id ="work" >
        <ProjectsHeadline>These are some my projects</ProjectsHeadline>
        <Container>
            <ProjectsGrid>        
                {Object.keys(props.items).map((key) => {
                    return(
                    <ProjectCard name = {props.items[key].name} link = {props.items[key].link} img = {props.items[key].img}/>
                    )
                    })}
                        
            </ProjectsGrid>
            <ShowAll href="http://" target="_blank" rel="noopener noreferrer">
                 <div>
                    <p class="showall__text">Show all</p>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </ShowAll>
        </Container>
    </MainDiv>
)

export default Projects