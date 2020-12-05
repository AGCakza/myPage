import React from 'react'
import {Project, ProjectImg, Img, ProjectArrows, ProjectName} from './styles'

const ProjectCard = (props) => (
    <Project>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <ProjectImg>
                <Img src={props.img} alt="" />
            </ProjectImg>
            <ProjectName><ProjectArrows>{props.name}</ProjectArrows></ProjectName>
        </a>
    </Project>
)

export default ProjectCard