import { Container, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
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
const Projects = (props) => {
  const { isEdit } = props;
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  const classes = useStyles();
  return (
    <Container id="works" className={isEdit ? null : classes.container}>
      <Typography className={classes.title} component="h2">
        {isEdit ? "Click on the work you want to edit" : "Works"}
      </Typography>
      <div className={isEdit ? null : classes.projectsWrapper}>
        {projects
          ? projects.map((project) => (
              <ProjectCard project={project} key={project.id} isEdit={isEdit} />
            ))
          : [...Array(6)].map((item, index) => (
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
