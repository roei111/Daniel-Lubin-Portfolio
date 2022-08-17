import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import projects from "../../../data/projectData";
import ProjectCard from "./projectCard/ProjectCard";
import { useStyles } from "./Projects-style";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore";

const Projects = () => {
  const [projects, setProjects]=useState([])
  useEffect(() => {
    console.log("in useeffect");
    getProjects().then((projects)=>{setProjects(projects)})
  }, []);

  const getProjects = async () => {
    let projectsData = [];
    const querySnapshot = await getDocs(collection(db, "works"));
    querySnapshot.forEach((doc) => {
      projectsData.push({ id: doc.id, ...doc.data() });
      console.log(doc.id, " => ", doc.data());
    });
    return projectsData;
  };
  const classes = useStyles();
  return (
    <Container id="works" className={classes.container}>
      <Typography className={classes.title} component="h2">
        Works
      </Typography>
      <div className={classes.projectsWrapper}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
