import React from "react";

export default function AlertBox(props) {
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{height:"50px"}}
        >
          {props.alert.message}
        </div>
      </div>
    )
  );
}
