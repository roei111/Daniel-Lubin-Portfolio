import { Container, Typography } from "@mui/material";
import projects from "../../../data/projectData";
import ProjectCard from "./projectCard/ProjectCard";
import { useStyles } from "./Projects-style";

const Projects = () => {
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
