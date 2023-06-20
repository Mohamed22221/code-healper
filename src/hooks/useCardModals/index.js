const { useState } = require("react");

export const useCardModals = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [cardID, setCardID] = useState();
  const [modals, setModals] = useState({
    pause: false,
    delete: false,
    edit: false,
    restart: false,
    pin: false,
    fav: false,
  });
  const modalsToggler = (name, id = null) => {
    setCardID(id);
    setOpenDrawer(false);
    setModals({ ...modals, [name]: !modals[name] });
  };

  return {
    openDrawer,
    setOpenDrawer,
    cardID,
    setCardID,
    modals,
    setModals,
    modalsToggler,
  };
};

// how to use
//  const { openDrawer, setOpenDrawer, modals, modalsToggler } = useCardModals();
// onClick={(e) => {
//   e.stopPropagation();
//   modalsToggler("fav", 1);
// }}