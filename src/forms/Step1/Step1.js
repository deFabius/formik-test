import { Formik, Form } from "formik";
import { Input, Select, Button, Flex } from "../../uikit";
import { connect } from "react-redux";
import { save } from "../../redux/actions";
import validationSchema from "./Step1.validation";
import { push } from "connected-react-router";

const Step1 = ({ initialState, save, push }) => {
  const onSubmit = (values) => {
    save({
      name: values.name,
      surname: values.surname,
      email: values.email,
      gender: values.gender,
    });
    push("/step2");
  };
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { handleReset, isSubmitting, dirty } = props;
          return (
            <Form>
              <h1>Step 1</h1>
              <Input name="name" placeholder="Please type your name" />
              <Input name="surname" placeholder="Please type your surname" />
              <Input name="email" placeholder="Please type your email" />
              <Select
                name="gender"
                options={["Male", "Female", "Other"]}
                placeholder={"Please select your gender"}
              />

              <Flex>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Next
                </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    initialState: state,
  };
};

const mapDispatchToProps = {
  save,
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
