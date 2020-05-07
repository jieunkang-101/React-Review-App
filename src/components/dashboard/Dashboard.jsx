import React, { Component } from 'react'
import Notifications from './Notifications'
import ReviewList from '../review/ReviewList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//vimport { Redirect } from 'react-router-dom'
import UserPage from '../review/UserPage'


class Dashboard extends Component {
  
  render(){
    const { reviews, auth, notifications } = this.props;
    // if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ReviewList reviews={reviews} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
            <UserPage reviews={reviews} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reviews', orderBy: ['createAt', 'desc'] },
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc'] }
  ])
)(Dashboard) 