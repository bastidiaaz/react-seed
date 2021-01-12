import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="home-view-container container-fluid p-0">
      <h4 className="mb-3 subtitle">Kongames</h4>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
