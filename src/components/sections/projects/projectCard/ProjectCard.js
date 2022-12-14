import { useContext, useState } from "react";
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
import ConfirmDialog from "../../../ui/ConfirmDialog";
import YoutubeVideo from "./YoutubeVideo";

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project, isEdit } = props;
  const editProjectContext = useContext(EditProjectContext);
  const notificationCtx = useContext(NotificationContext);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

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
    <>
      <Card className={classes.card} elevation={15}>
        {!isEdit && project.youtubeLink !== "" ? (
          <YoutubeVideo
            title={project.title}
            youtubeLink={project.youtubeLink}
          />
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
                  onClick={() => {
                    setConfirmDialogOpen(true);
                  }}
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
      <ConfirmDialog
        title="You are about to delete a project"
        open={confirmDialogOpen}
        setOpen={setConfirmDialogOpen}
        onConfirm={() => {
          deleteWorkHandler();
        }}
      >
        Are you sure you want to delete this project? This process cannot be
        undone.
      </ConfirmDialog>
    </>
  );
};

export default ProjectCard;
