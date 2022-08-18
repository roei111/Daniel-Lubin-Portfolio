import { Container, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
// import projects from "../../../data/projectData";
import ProjectCard from "./projectCard/ProjectCard";
import { useStyles } from "./Projects-style";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../firestore";

const getProjects = async () => {
  let projectsData = [];
  const queryDB = query(
    collection(db, "works"),
    orderBy("youtubeLink", "desc"),
    orderBy("year", "desc")
  );
  const snapshot = await getDocs(queryDB);
  snapshot.forEach((doc) => {
    projectsData.push({ id: doc.id, ...doc.data() });
  });
  return projectsData;
};
const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  const classes = useStyles();
  return (
    <Container id="works" className={classes.container}>
      {console.log("app in being rendered")}

      <Typography className={classes.title} component="h2">
        Works
      </Typography>
      <div className={classes.projectsWrapper}>
        {projects
          ? projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))
          : [...Array(6)].map((item,index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rounded"
                className={classes.projectCard}
              />
            ))}
      </div>
    </Container>
  );
};

export default Projects;
