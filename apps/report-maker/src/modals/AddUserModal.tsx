function AddUserModal() {
  return (
    <div
      className="modal fade"
      id="regModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add User
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div style={{ padding: 20 }}>
              <form
                action="../csr-admin/server-side/reg-server.php"
                method="post"
                encType="multipart/form-data"
                id="addUser">
                <div className="mb-3 d-flex gap-2">
                  <label className="pure-material-textfield-outlined">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Full name"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Name"
                      name="name"
                    />
                  </label>

                  <label className="pure-material-textfield-outlined">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Email Id"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="example@email.com"
                      name="email"
                    />
                  </label>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    +91
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    aria-label="Phone Number"
                    aria-describedby="basic-addon1"
                    name="phone"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Profile Picture
                  </label>
                  <input
                    name="image"
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept="image/*"
                  />
                </div>

                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01">
                    Role
                  </label>
                  <select
                    name="role"
                    className="form-select"
                    id="inputGroupSelect01">
                    <option selected={true}>Choose...</option>
                    <option value="2">User</option>
                    <option value="1">Admin</option>
                    <option value="0">Technician</option>
                  </select>
                </div>

                <label className="pure-material-textfield-outlined">
                  <input
                    type="password"
                    className="form-control"
                    aria-label="Password"
                    aria-describedby="inputGroup-sizing-lg"
                    id="inputPassword"
                    placeholder="Password"
                    name="password"
                  />
                </label>

                <label className="pure-material-textfield-outlined">
                  <input
                    type="password"
                    className="form-control"
                    aria-label="Password"
                    aria-describedby="inputGroup-sizing-lg"
                    id="inputPassword"
                    placeholder="Confirm Password"
                    name="cpassword"
                  />
                </label>
                <center>
                  <br />
                  <div className="mb-3">
                    <input
                      id="button"
                      name="submit"
                      type="submit"
                      style={{ width: "70%" }}
                      className="btn btn-outline-success btn-lg"
                      value="SignUp"
                    />
                  </div>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
