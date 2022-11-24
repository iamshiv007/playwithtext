import React from "react";

export default function AlertBox(props) {
  //Alert component
  return (
    //Agar alert ki value null ho to alert box ko mat dikhao
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{ height: "50px" }}
        >
          {props.alert.message}
        </div>
      </div>
    )
  );
}
