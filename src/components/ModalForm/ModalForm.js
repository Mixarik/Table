import React from "react";

import ReactModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import cn from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./ModalForm.module.scss";
import "react-toastify/dist/ReactToastify.css";

const ModalForm = ({ switchModalForm, isModalForm }) => {
  const schema = yup.object({
    firstName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    secondName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    age: yup
      .number("must be a number")
      .min(18, "You so young!")
      .max(100, "You so old!")
      .integer()
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const showToastMessage = () => {
    toast.success('Success Addition !', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  return (
    <ReactModal
      isOpen={isModalForm}
      ariaHideApp={false}
      className={cn(styles.modal, "col-5 ")}
    >
      <form
        className="d-flex flex-column mx-2"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {/* handleSubmit проверит входные данные перед отправкой*/}
        <div className="my-2">
          <span>first name: </span>
          <input
            className="form-control"
            type="text"
            placeholder="first name"
            {...register("firstName")}
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className="mb-2">
          <span>second name: </span>
          <input
            className="form-control"
            type="text"
            placeholder="last name"
            {...register("secondName")}
          />
          <p>{errors.secondName?.message}</p>
        </div>

        <div className="mb-2">
          <span>email: </span>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="d-flex mb-2">
          <span>gender:</span>
          <div className="form-check">
            <input
              defaultChecked={true}
              className="form-check-input"
              type="radio"
              id="flexRadioDefault1"
              value="male"
              {...register("gender")}
            />
            <label
              className="form-check-label me-3"
              htmlFor="flexRadioDefault1"
            >
              male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="flexRadioDefault2"
              value="female"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              female
            </label>
          </div>
        </div>
        <div className="d-flex align-items-center mb-2">
          <span className="me-2">age:</span>
          <input
            className="form-control w-25"
            type="text"
            placeholder="age"
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
        </div>
        <div className="d-flex justify-content-end mb-2">
          <button onClick={() => switchModalForm()}>close</button>
          <input
            className={cn("ms-2", styles.buttonSend)}
            type="submit"
            value="add"
            onClick={() => {
              Object.keys(errors).length === 0 && showToastMessage();
              console.log(Object.keys(errors).length)
            }
            }
          />
        </div>
      </form>
      <ToastContainer/>
    </ReactModal>
  );
};
export default ModalForm;
