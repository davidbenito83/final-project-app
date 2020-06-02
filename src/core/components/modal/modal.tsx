import * as React from 'react';
// import * as ReactDOM from "react-dom";

interface Props {
  handleClose: Object,
  show: boolean,
  children: any
}

export const Modal: React.FunctionComponent<Props> = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <td className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </td>
  );
};
