import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { IconButton } from "..";

export type DialogProps = Omit<MuiDialogProps, "onClose"> & {
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * https://mui.com/components/Dialogs/
 *
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 */
export const Dialog: FC<DialogProps> = ({ onClose, children, ...props }) => (
  <MuiDialog onClose={onClose} {...props}>
    {onClose && (
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          width: 40,
          height: 40,
          paddingTop: 1.5,
          right: 12,
          top: 12,
          zIndex: 50,
        }}
        data-cy="close-dialog"
      >
        X
      </IconButton>
    )}
    {children}
  </MuiDialog>
);
