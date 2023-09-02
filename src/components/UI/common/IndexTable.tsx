import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { IIndexViewBluePrint } from "../IBluePrint";
import IndexTableRow from "./IndexTableRow";
import NoResultCard from "./NoResultCard";
import ModalWindow from "../modal/ModalWindow";
import Card from "react-bootstrap/Card";
import { DialogueType } from "../modal/DialogueType";
import MESSAGES from "../../../data/messages";
import { DELETE } from "../../../utils/Http";
import { toast } from "react-toastify";
import "./IndexTable.scss";
import CrudButton from "./CrudButton";
import { ActionType } from "../enums/ActionType";
interface ITableView {
  blueprint: IIndexViewBluePrint;
  data: any[];
  path: string;
  header?: string;
  refresh: () => void;
}

const IndexTable: React.FC<ITableView> = ({
  blueprint,
  data,
  path,
  refresh,
  header = "",
}) => {
  const columns = blueprint.Columns;
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const confirmDelete = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const onDeletedHandler = (status: number, data: any) => {
    toast.info(MESSAGES.ITEM_DELETED);
    refresh();
  };

  const deleteHandler = (id: number) => {
    DELETE(path, id, onDeletedHandler);
  };

  if (data.length > 0 && data[0]?.id > 0)
    return (
      <Container>
        <ModalWindow
          header={MESSAGES.DELETE_HEADER}
          dialogueType={DialogueType.YES_NO}
          onYesHandler={deleteHandler}
          visibility={showModal}
          setVisibility={setShowModal}
          data={deleteId}
        >
          <Card.Text>{MESSAGES.DELETE_MESAGE}</Card.Text>
        </ModalWindow>
        <h1>{header}</h1>
        <div className="createBtn">
          <CrudButton
            type={ActionType.CREATE}
            header={MESSAGES.BTN_ADD}
            path={blueprint.Path}
          />
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              {columns.map((column, index) => {
                return <th key={index}>{blueprint.getHeader(column)}</th>;
              })}
              <th>{MESSAGES.CAPTION_ACTIONS}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataRow, index) => {
              return (
                <IndexTableRow
                  key={index}
                  columns={columns}
                  primary_key={blueprint.Key}
                  row={dataRow}
                  path={blueprint.Path}
                  deleteHandler={confirmDelete}
                  actions={blueprint.Actions}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  else
    return (
      <NoResultCard
        message="No results to show, please make a new search."
        footer="Nameless Ledger 2023"
      />
    );
};

export default IndexTable;
