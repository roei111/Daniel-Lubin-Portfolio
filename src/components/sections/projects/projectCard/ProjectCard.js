import { Typography, Card, CardContent } from "@mui/material";
import { useStyles } from "./ProjectCard-style";

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project } = props;
  return (
    <Card className={classes.card} elevation={15}>
      {project.youtubeLink !== "" ? (
        <iframe
          width="100%"
          height="250"
          src={project.youtubeLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : null}
      <div className={classes.contentWrapper}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
