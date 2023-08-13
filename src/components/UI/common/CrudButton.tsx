import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faEye,
  faSquarePlus,
  faTrash,
  faPenToSquare,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { ActionType } from "../enums/ActionType";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

export interface ICrudButton {
  path: string;
  type: ActionType;
  id?: number;
  header?: string | undefined;
  size?: string | undefined;
  deleteHandler?: (id: number) => void | undefined;
}

const dummyDelete = (id: number) => console.log("deleted: " + id);

const CrudButton: React.FC<ICrudButton> = ({
  path,
  type,
  id = -1,
  deleteHandler = dummyDelete,
  size = "1.5em",
  header = undefined,
}) => {
  const navigate = useNavigate();

  const getStyleByAction = (
    actionType: ActionType
  ): [string, IconDefinition, () => void] => {
    switch (actionType) {
      case ActionType.CREATE:
        return ["light", faSquarePlus, () => navigate(`/${path}/create`)];
      case ActionType.SHOW:
        return ["primary", faEye, () => navigate(`/${path}/${id}`)];
      case ActionType.EDIT:
        return ["light", faPenToSquare, () => navigate(`/${path}/edit/${id}`)];
      case ActionType.DELETE:
        return ["danger", faTrash, () => deleteHandler(id)];
      default:
        return ["info", faBan, () => navigate(`/${path}`)];
    }
  };

  const [style, icon, action] = getStyleByAction(type);

  return (
    <Button variant={style} onClick={action}>
      {header !== undefined ? (
        <span>
          <FontAwesomeIcon icon={icon} fontSize={size} />
          {" " + header}
        </span>
      ) : (
        <FontAwesomeIcon icon={icon} fontSize={size} />
      )}
    </Button>
  );
};

export default CrudButton;
