import React, { useMemo, useState } from "react";

import cn from "classnames";

import { useTable } from "react-table";

import { PersonsTable } from "../PersonsTable";
import { ModalForm } from "../ModalForm";
import { ButtonToAddPerson } from "../ButtonToAddPerson";

import { body, col } from "../tableStructure";


const TablePage = () => {
  const [isModalForm, setIsModalForm] = useState(false);

  const data = useMemo(() => body, []);
  const columns = useMemo(() => col, []);

  const table = useTable({ columns, data });

  const switchModalForm = () => {
    setIsModalForm((prev) => !prev);
  };

  return (
    <div className="d-flex justify-content-center fs-5">
      <div className="d-flex flex-column">
        <PersonsTable {...table} />
        <ButtonToAddPerson switchModalForm={switchModalForm} />

        <ModalForm
          isModalForm={isModalForm}
          switchModalForm={switchModalForm}
        />
      </div>
    </div>
  );
};
export default TablePage;
