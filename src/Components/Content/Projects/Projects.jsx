import React from 'react';
import ProjectData from './ProjectItems.jsx';



const Project = () => {
    return(
        <div>
        
        </div>
    );
}

const Player = () => {
    return(
        <div>
            <div>
                <Project />
            </div>
            <div>
            
            </div>
        </div>
    );
}

class Projects extends React.Component{
    render(){
        return(
            <div className="project">
                <div className="project-header">
                </div>
                <div className="project-data">
                    <Player />
                </div>
            </div>
        );
    }
}

export default Projects;