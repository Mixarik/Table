import React from "react";

import { ADD_BUTTON } from "./ButtonToAddPerson.constants";
import styles from "./ButtonToAddPerson.module.scss";

const ButtonToAddPerson = ({ switchModalForm }) => {
  return (
    <div className="d-flex justify-content-end">
      <button className={styles.button} onClick={() => switchModalForm()}>{ADD_BUTTON.ADD}</button>
    </div>
  );
};
export default ButtonToAddPerson;
