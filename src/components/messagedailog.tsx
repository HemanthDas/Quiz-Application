const MessageDaialog = () => {
  const message = localStorage.getItem("warn-message");
  return (
    <div className="message-dialog">
      <p>{message}</p>
    </div>
  );
};

export default MessageDaialog;
