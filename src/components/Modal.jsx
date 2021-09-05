const Modal = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button> X </button>
        <div className="title">
          <h1>続行してもよろしいですか？</h1>
        </div>
        <div className="body">
          <p>次のページがすごいことになっています。行ってみたくなりましたか？</p>
        </div>
        <div className="footer">
          <button>中止</button>
          <button>続ける</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
