import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>Add New Review</NavLink></li>
      <li><NavLink to='/userpage'>My Reviews</NavLink></li>
      <li><a href="http://localhost:3000/" onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
        {props.profile.initials}
      </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);