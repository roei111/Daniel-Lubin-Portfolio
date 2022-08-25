import { useState } from "react";
import { Button, Paper } from "@mui/material";
import Projects from "../projects/Projects";

const ProjectsEdit = () => {
  const [isEdit, setIsEdit] = useState(false);

  const openEditHandler = () => {
    setIsEdit(true);
  };

  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: "700px", margin: "0 auto", padding: "20px", display: "flex" }}
    >
      {isEdit ? (
        <Projects isEdit={true}/>
      ) : (
        <Button variant="contained" onClick={openEditHandler} sx={{margin: "0 auto"}}>
          Edit Works
        </Button>
      )}
    </Paper>
  );
};

export default ProjectsEdit;
