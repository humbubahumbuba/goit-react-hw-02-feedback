import React from 'react';
import PropTypes from 'prop-types';
import { NotificationTitle } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotificationTitle>{message}</NotificationTitle>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
