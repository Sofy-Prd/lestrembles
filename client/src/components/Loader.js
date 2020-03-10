import React from 'react';

export default props => {
  return (
    <div className="Loader">
      {props.children || "loading..."}
    </div>
  );
}