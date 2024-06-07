import { BaseSyntheticEvent } from "react";

const ProfileForm = () => {
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="form-outer">
      <div className="signup-container">
        <div className="left-container">
          <div className="puppy">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="80px"
              viewBox="0 0 530.000000 96.000000"
              preserveAspectRatio="xMidYMid meet"
              style={{ padding: "0px 20px 0px 10px" }}>
              {/* SVG Path Data */}
            </svg>
          </div>
        </div>
        <div className="right-container border">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <header>
              <h1>Yay, Boii ! Change some setting, it don't really hearts!</h1>
              <div className="set">
                <div className="pets-name">
                  <label htmlFor="pets-name">Name</label>
                  <input
                    id="pets-name"
                    placeholder="Your name"
                    type="text"
                    value={"Anonymouse"}
                    name="name"
                  />
                </div>
                <div className="pets-photo">
                  <span
                    style={{ fontSize: "40px" }}
                    className="material-symbols-outlined">
                    cloud_upload
                  </span>
                  <label htmlFor="image">&nbsp;Update Profile</label>
                  <input
                    id="image"
                    className="inputfile"
                    type="file"
                    name="pic"
                    // onChange={(e) =>
                    //   (e.target.parentNode.querySelector("label").innerHTML =
                    //     "&nbsp;File Accessed")
                    // }
                  />
                  <input
                    id="image-got"
                    type="hidden"
                    value="0"
                    name="image-got"
                  />
                </div>
              </div>
              <div className="set">
                <div className="pets-breed">
                  <label htmlFor="pets-breed">Email</label>
                  <input
                    id="pets-breed"
                    placeholder="email@me.com"
                    type="email"
                    value={"email@me.com"}
                    disabled
                    readOnly
                  />
                </div>
                <div className="pets-birthday">
                  <label htmlFor="pets-birthday">Phone</label>
                  <input
                    id="pets-birthday"
                    name="phone"
                    placeholder="+910000000000"
                    type="number"
                    value={"Test Phone Number"}
                  />
                </div>
              </div>
              <div className="set">
                <div className="pets-gender">
                  <label htmlFor="pet-gender-female">Gender</label>
                  <div className="radio-container">
                    <input
                      checked
                      id="pet-gender-female"
                      name="gender"
                      type="radio"
                      value="female"
                    />
                    <label htmlFor="pet-gender-female">Female</label>
                    <input
                      id="pet-gender-male"
                      name="gender"
                      type="radio"
                      value="male"
                    />
                    <label htmlFor="pet-gender-male">Male</label>
                  </div>
                </div>
                <div className="pets-spayed-neutered">
                  <label htmlFor="pet-spayed">Maintenance</label>
                  <div className="radio-container">
                    <input
                      checked
                      id="pet-spayed"
                      name="maintenance"
                      type="radio"
                      value="true"
                    />
                    <label htmlFor="pet-spayed">True</label>
                    <input
                      id="pet-neutered"
                      name="maintenance"
                      type="radio"
                      value="false"
                    />
                    <label htmlFor="pet-neutered">False</label>
                  </div>
                </div>
              </div>

              <div className="set">
                <div className="pets-breed">
                  <label htmlFor="pets-breed">Old Password</label>
                  <input
                    id="pets-breed"
                    placeholder="Pass"
                    type="password"
                    value=""
                    name="oldpassword"
                  />
                </div>
                <div className="pets-birthday">
                  <label htmlFor="pets-birthday">New Password</label>
                  <input
                    id="pets-birthday"
                    placeholder="Pass"
                    type="text"
                    value=""
                    name="newpassword"
                  />
                </div>
              </div>

              <div className="pets-weight">
                <label style={{ marginTop: "10px" }}>
                  Status : {false ? "In Maintenance" : "Not In Maintenance"}
                </label>
              </div>
            </header>
            <footer>
              <div className="set">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="server-btn"
                  value="Update"
                />
              </div>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
