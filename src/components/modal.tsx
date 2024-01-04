import React, { useMemo } from "react";
import Login from "../pages/login.tsx";

function ModelType({ type }: { readonly type: number }) {
  if (type === 1) return <Login />;
  if (type === 2) return <div className="top">Modal 2</div>;
  if (type === 3) return <div className="top">Modal 3</div>;
  return (
    <div className="top">
      <Login />
    </div>
  );
}

const MemoizedModelType = React.memo(ModelType);

const Modal = ({
  children,
  type,
  state,
}: {
  children: React.ReactNode;
  type: number;
  state: boolean;
}) => {
  const modalContent = useMemo(() => {
    return state ? <MemoizedModelType type={type} /> : null;
  }, [state, type]);

  return (
    <>
      {children}
      {modalContent && <div className="pop">{modalContent}</div>}
    </>
  );
};

export default Modal;
