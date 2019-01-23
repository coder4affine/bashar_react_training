import React, { memo } from 'react';
import PropTypes from 'prop-types';

const statusView = ({ changeStatus }) => (
  <div>
    <input type="button" value="All Tasks" onClick={() => changeStatus('all')} />
    <input type="button" value="Pending Tasks" onClick={() => changeStatus('pending')} />
    <input type="button" value="Completed Task" onClick={() => changeStatus('completed')} />
  </div>
);

statusView.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default memo(statusView);
