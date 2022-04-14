import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const UserEditScreen = () => {
  const location = useLocation();

  const { id } = useParams();

  const history = useHistory();

  const [state, setState] = useState({
    name: '',
    email: '',
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const { name, email } = state;

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    /* if(!user.name || user._id !== id){

    } */
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    //DISPATCH REGISTER
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <Link to="/admin/userList" className="btn btn-light my-3"></Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name: </Form.Label>
              <Form.Control
                style={{ marginBottom: '1rem' }}
                type="name"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onChangeHandler}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address: </Form.Label>
              <Form.Control
                style={{ marginBottom: '1rem' }}
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onChangeHandler}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check
                style={{ marginBottom: '1rem' }}
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
