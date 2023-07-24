import React from 'react';
import styles from './styles.css';
import ProjectImages from '../../utils/projectImage';

function Images(image){
    return ( <img className='project-images' src={image.image} />)
}

const Projects = () => {
    return(
        <div>
            <h1 className='projects-heading'>Projects</h1>
        <div className='projects'>
             {ProjectImages.map(Images)}
             {/* <img src="https://images.unsplash.com/photo-1606299770622-d569b5464732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVhY29jayUyMGZlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" /> */}
        </div> 
        
        </div>
    );
}

export default Projects;