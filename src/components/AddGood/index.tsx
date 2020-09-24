import React, { FC } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Card, Input } from "antd";

import { IGood } from "../../api/good";

import { Button } from "../../components/common";

import "./index.sass";

type IProps = {
  createGood: (name: string, price: string, quantity: string) => void;
};
type IForm = {
  name: string;
  price: string;
  quantity: string;
};
const GoodSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.string().required("Price is required"),
  quantity: Yup.string().required("Quantity is required"),
});

const AddGood: FC<IProps> = ({ createGood }) => {
  const initialValues: IForm = { name: "", price: "", quantity: "" };
  return (
    <Card className="add-good--card">
      <Formik
        initialValues={initialValues}
        validationSchema={GoodSchema}
        onSubmit={(values: IForm, { resetForm }) => {
          createGood(values.name, values.price, values.quantity);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="add-good--form" onSubmit={handleSubmit}>
            <div className="field">
              <Input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            <div className="field">
              <Input
                name="price"
                placeholder="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </div>
            <div className="field">
              <Input
                name="quantity"
                placeholder="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
              />
            </div>
            <div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default AddGood;
