import { createContext, useState } from "react";

const EditProjectContext = createContext({
  projectOnEdit: null,
  startEdit: (project) => {},
  closeEdit: () => {},
});

export const EditProjectContextProvider = (props) => {
  const [projectOnEdit, setProjectOnEdit] = useState(null);

  const handleStartEdit = (project) => {
    setProjectOnEdit(project);
  };
  const handleClose = () => {
    setProjectOnEdit(null);
  };

  return (
    <EditProjectContext.Provider
      value={{
        projectOnEdit,
        startEdit: handleStartEdit,
        closeEdit: handleClose,
      }}
    >
      {props.children}
    </EditProjectContext.Provider>
  );
};

export default EditProjectContext;
