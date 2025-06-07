import { overlay } from "overlay-kit";
import React from "react";
import Dialog, { DialogConfig } from "../modules/Dialog";

function useDialog() {
  const showDialog = (config: DialogConfig) => {
    overlay.open(({ isOpen, close, unmount }) => (
      <Dialog isOpen={isOpen} close={close} unmount={unmount} config={config} />
    ));
  };

  return { showDialog };
}

export default useDialog;
