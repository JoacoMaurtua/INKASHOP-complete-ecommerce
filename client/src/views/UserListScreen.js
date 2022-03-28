import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {listUsers} from '../actions/userActions';

export const UserListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector(state => state.userList)
  const {loading, error, users} = userList

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])


  return (
    <>
    <h1>Users</h1>
    {loading ? <Loader/> : error? <Message variant='danger'>{error}</Message>
      :(
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key = {user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                <td>
                  {user.isAdmin ? (
                    <i className="fa fa-check" style={{color:'green'}}></i>
                  ):(
                    <i className="fa fa-times" style={{color:'red'}}></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

    </>
  )
}
