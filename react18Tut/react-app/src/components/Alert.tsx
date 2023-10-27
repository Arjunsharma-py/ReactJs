import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>{children}</strong>
        <button
          type="button"
          className="btn-close"
          // data-bs-dismiss="alert"
          // aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};
