import { useContext, useEffect } from "react";
import NotificationContext from "../../../../context/notification-context";
import { Paper, Button, TextField, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firestore";
import EditProjectContext from "../../../../context/edit-project-context";

const ProjectForm = () => {
  const notificationCtx = useContext(NotificationContext);
  const editProjectContext = useContext(EditProjectContext);
  const { projectOnEdit, closeEdit } = editProjectContext;
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      year: "",
      youtubeLink: "",
    },
  });

  useEffect(() => {
    if (projectOnEdit) {
      reset(projectOnEdit, { keepDefaultValues: true });
    }
  }, [projectOnEdit, reset]);

  const closeEditHandler = () => {
    closeEdit();
    reset();
  };

  const sumbitHandler = async (data) => {
    if (projectOnEdit) {
      await updateDoc(doc(db, "works", projectOnEdit.id), data)
      .then(() => {
        notificationCtx.createNotification(
          "success",
          "Successfully updated work"
        );
      })
      .catch(() => {
        notificationCtx.createNotification(
          "error",
          "There was an error trying to update the work"
        );
      });
    } else {
      await addDoc(collection(db, "works"), data)
        .then(() => {
          notificationCtx.createNotification(
            "success",
            "Successfully created work"
          );
        })
        .catch((error) => {
          notificationCtx.createNotification(
            "error",
            "There was an error trying to create work"
          );
        });
    }
    reset();
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: "700px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(sumbitHandler)}>
        <Box
          sx={{ display: "grid", gridRowGap: "20px", padding: "20px" }}
          margin={{ xs: "20px 0", sm: "20px 100px" }}
        >
          <Typography variant="h5" textAlign={"center"}>
            {projectOnEdit ? "Edit work" : "Add new work"}
          </Typography>
          <Controller
            control={control}
            name="title"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? "Title is required" : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={"Title"}
                variant="outlined"
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? "Description is required" : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={"Description"}
                variant="outlined"
              />
            )}
          />
          <Controller
            control={control}
            name="year"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? "Year is required" : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={"Year"}
                variant="outlined"
                type="Number"
              />
            )}
          />
          <Controller
            control={control}
            name="youtubeLink"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                helperText={"Youtube link is not required"}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={"Youtube Link "}
                variant="outlined"
              />
            )}
          />
          <Button variant="contained" type="sumbit">
            Submit
          </Button>
          {projectOnEdit ? (
            <Button variant="contained" onClick={closeEditHandler}>
              Close edit
            </Button>
          ) : null}
        </Box>
      </form>
    </Paper>
  );
};

export default ProjectForm;
