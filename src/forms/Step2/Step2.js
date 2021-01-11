import { Formik, Form } from "formik";
import { Input, Select, Button, Flex } from "../../uikit";
import { connect } from "react-redux";
import { save } from "../../redux/actions";
import validationSchema from "./Step2.validation";

const Step2 = ({ initialState, save }) => {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Formik
        initialValues={initialState}
        onSubmit={save}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { handleReset, isSubmitting, dirty } = props;
          return (
            <Form>
              <h1>Step 2</h1>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
