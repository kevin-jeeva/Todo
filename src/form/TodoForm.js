import React, { useState } from "react";
import { Formik } from "formik";
import { Grid, Input, Button, Form, Label } from "semantic-ui-react";
import * as yup from "yup";

const TodoForm = ({ onSubmit }) => {
  const initialValues = { todo: "" };
  const validationSchema = yup.object().shape({
    todo: yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        onSubmit(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Form.Field>
                  <Input
                    fluid
                    size="large"
                    name="todo"
                    value={values.todo || ""}
                    onChange={handleChange}
                    placeholder="Enter a task"
                  />
                  {errors.todo && touched.todo ? (
                    <Label basic color="red" pointing>
                      Enter a task
                    </Label>
                  ) : null}
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}>
                <Button type="submit">Add Task</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
