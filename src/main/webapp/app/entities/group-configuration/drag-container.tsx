import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  label?: string;
};

const DragContainer: React.FC<Props> = (props) => (
  <div className="drag-container">
    <div className="drag-container-label">{props.label}</div>
    <div className="drag-container-section">{props.children}</div>
  </div>
);

export default DragContainer;
