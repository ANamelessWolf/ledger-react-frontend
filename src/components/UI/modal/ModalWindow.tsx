import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Backdrop from "./Backdrop";
import { DialogueType } from "./DialogueType";
import { ButtonType } from "../enums/ButtonType";
import UiUtils from "../../../utils/UiUtils";
import "./Modal.scss";
interface IModalWindow {
  header: string;
  dialogueType: DialogueType;
  children: any;
  visibility: boolean;
  setVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
  onOkHandler?: (data: any) => void;
  onCancelHandler?: (data: any) => void;
  onYesHandler?: (data: any) => void;
  onNoHandler?: (data: any) => void;
}

const ModalWindow: React.FC<IModalWindow> = ({
  header,
  dialogueType,
  children,
  visibility,
  setVisibility = undefined,
  onOkHandler = undefined,
  onCancelHandler = undefined,
  onYesHandler = undefined,
  onNoHandler = undefined,
  data = {},
}) => {
  const getButtons = (dialogueType: DialogueType) => {
    if (dialogueType === DialogueType.OK_CANCEL) {
      return [ButtonType.OK, ButtonType.CANCEL];
    } else if (dialogueType === DialogueType.YES_NO) {
      return [ButtonType.YES, ButtonType.NO];
    } else if (dialogueType === DialogueType.YES_NO_CANCEL) {
      return [ButtonType.YES, ButtonType.NO, ButtonType.CANCEL];
    }
    return [ButtonType.OK];
  };

  const closeModal = (option: ButtonType) => {
    if (setVisibility !== undefined) {
      setVisibility(false);
    }
    if (onOkHandler !== undefined) {
      onOkHandler(data);
    }
    if (onCancelHandler !== undefined) {
      onCancelHandler(data);
    }
    if (onYesHandler !== undefined) {
      onYesHandler(data);
    }
    if (onNoHandler !== undefined) {
      onNoHandler(data);
    }
  };

  const buttons = getButtons(dialogueType);

  const getElementById = (id): any => {
    return document?.getElementById(id);
  };
  return visibility ? (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <Container className="modalPosition" data-bs-theme="dark">
          <Card className="text-center" text={"light"}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>{children}</Card.Body>
            <Card.Footer>
              <div>
                {buttons.map((item, index) => {
                  return (
                    <Button
                      className="actions"
                      key={index}
                      variant={UiUtils.GetButtonVariant(item)}
                      onClick={(e) => closeModal(item)}
                    >
                      {UiUtils.GetButtonHeader(item)}
                    </Button>
                  );
                })}
              </div>
            </Card.Footer>
          </Card>
        </Container>,
        getElementById("overlay-root")
      )}
    </React.Fragment>
  ) : (
    <></>
  );
};

export default ModalWindow;
