import { Container, Typography, Divider } from "@mui/material";
import projects from "../../../data/projectData";
import ProjectCard from "./projectCard/ProjectCard";
import { useStyles } from "./Projects-style";

const Projects = () => {
  const classes = useStyles();
  return (
    <Container id="works">
      <Divider variant="middle" style={{ margin: "1rem" }} />
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
