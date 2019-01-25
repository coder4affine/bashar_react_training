import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import TextInput from '../../components/TextInput';

const courseForm = ({ initialValues, onSubmit, authors }) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Title is required';
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <Field type="text" name="title" label="Title" component={TextInput} />
          <Field type="text" name="watchHref" label="Link" component={TextInput} />
          <Field type="text" name="length" label="Length" component={TextInput} />
          <Field type="text" name="category" label="Category" component={TextInput} />
          <Field component="select" name="authorId">
            <option value="">Select</option>
            {authors.map(author => (
              <option key={author.id} value={author.id}>{`${author.firstName} ${
                author.lastName
              }`}</option>
            ))}
          </Field>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

courseForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
};

export default courseForm;
