type DeleteConfirmModalProps = {
  onClick?: () => void;
};

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ onClick }) => {
  return (
    <div
      className="modal fade"
      id="deleteConfirm"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Are U Sure?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <label>
              Continueing this action will delete this record from database and
              it is isreversable. Go ahead if you want to permanently delete the
              record.
            </label>
            <input id="modal-id" type="hidden" />
            <input id="modal-reset" type="hidden" />
            <input id="modal-table" type="hidden" />
            <input id="modal-email" type="hidden" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onClick}
              data-bs-dismiss="modal">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
