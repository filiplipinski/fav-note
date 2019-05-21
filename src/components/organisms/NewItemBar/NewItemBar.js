import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Field } from 'formik';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  /* font-size: ${({ theme }) => theme.fontSize.s};
  font-size: 16px; */
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, toggleVisibility, addItem }) => {
  return (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading big>Create new {pageContext}</Heading>
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
        onSubmit={(values, { setSubmitting }) => {
          addItem(pageContext, values);
          setSubmitting(false);
          toggleVisibility(!isVisible);
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="title"
            />
            {pageContext === 'twitters' && (
              <StyledInput
                type="text"
                name="twitterName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
                placeholder="account name eg. hello_romen"
              />
            )}
            {pageContext === 'articles' && (
              <StyledInput as={Field} type="text" name="articleUrl" placeholder="link" />
            )}
            <StyledTextArea
              as="textarea"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              placeholder="description"
            />
            <Button type="submit" disabled={isSubmitting} activecolor={pageContext}>
              Add note
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
