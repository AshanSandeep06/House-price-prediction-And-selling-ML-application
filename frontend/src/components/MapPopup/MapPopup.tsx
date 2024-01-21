import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  IconButton,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import ReactLeafletMap from "../ReactLeafletMap";

interface MapPopupProps {
  open: boolean;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: React.ComponentProps<typeof Slide>,
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MapPopup: React.FC<MapPopupProps> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      maxWidth="lg"
      //   fullWidth
      //   className="!w-[calc(100% - 150px)]"
      fullScreen
    >
      <DialogTitle className="!pb-[4px]">
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent className="w-[calc(100% - 150px)] pb-5 gallery-container grid justify-center grid-rows-1 !h-[515px]">
        <ReactLeafletMap {...{ mapWidth: 1450, mapHeight: 615 }} />
      </DialogContent>
    </Dialog>
  );
};

export default MapPopup;
