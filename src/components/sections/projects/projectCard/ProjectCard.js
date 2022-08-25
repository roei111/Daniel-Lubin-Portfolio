import { useContext } from "react";
import EditProjectContext from "../../../../context/edit-project-context";
import {
  Typography,
  Card,
  CardContent,
  Button,
  ButtonGroup,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./ProjectCard-style";
import { animateScroll as scroll } from "react-scroll";
import { deleteWork } from "../../../../firestore/utils";
import NotificationContext from "../../../../context/notification-context";

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project, isEdit } = props;
  const editProjectContext = useContext(EditProjectContext);
  const notificationCtx = useContext(NotificationContext);

  const editWorkHandler = () => {
    editProjectContext.startEdit(project);
    scroll.scrollToTop();
  };

  const deleteWorkHandler = () => {
    deleteWork(project.id)
      .then(() => {
        notificationCtx.createNotification("success", "Succesfully deleted");
      })
      .catch(() => {
        notificationCtx.createNotification(
          "error",
          "There was an error trying to delete this work"
        );
      });
  };

  return (
    <Card className={classes.card} elevation={15}>
      {!isEdit && project.youtubeLink !== "" ? (
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
          {!isEdit ? (
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          ) : (
            <ButtonGroup variant="text" color="inherit">
              <Button
                aria-label="delete"
                endIcon={<DeleteIcon />}
                className={classes.button}
                onClick={deleteWorkHandler}
              >
                Delete
              </Button>
              <Button
                aria-label="edit"
                endIcon={<EditIcon />}
                onClick={editWorkHandler}
                className={classes.button}
              >
                Edit
              </Button>
            </ButtonGroup>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
