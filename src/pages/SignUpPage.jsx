import { useState } from "react";

const SignUpPage = () => {
  // Stepper state
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePic: null,
    dob: "",
    country: "",
    gender: "",
    twitter: "",
    facebook: "",
    google: "",
    linkedin: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file change (for profile pic)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  // Handle step navigation
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="w-1/2 relative">
        <img
          alt="Background"
          // src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          src="https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-base-100 p-6 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-primary mb-6">
          Signup Form - Welcome!
        </h2>

        <form
          onSubmit={handleSubmit}
          id="wizard-validation-form-horizontal"
          className="w-full space-y-5"
        >
          {/* Account Details */}
          {currentStep === 1 && (
            <div id="account-details-validation" className="space-y-5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="label label-text"
                    htmlFor="firstNameHorizontal"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="input w-full"
                    id="firstNameHorizontal"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="label label-text"
                    htmlFor="lastNameHorizontal"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="input w-full"
                    id="lastNameHorizontal"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="label label-text" htmlFor="emailHorizontal">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="john@gmail.com"
                    id="emailHorizontal"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="label label-text"
                    htmlFor="passwordHorizontal"
                  >
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      id="passwordHorizontal"
                      name="password"
                      className="input w-full"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Personal Info */}
          {currentStep === 2 && (
            <div id="personal-info-validation" className="space-y-5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="label label-text" htmlFor="profileHorizontal">
                    Profile Pic
                  </div>
                  <input
                    type="file"
                    className="input w-full"
                    id="profileHorizontal"
                    name="profilePic"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div>
                  <label className="label label-text" htmlFor="dobHorizontal">
                    DOB
                  </label>
                  <input
                    type="date"
                    className="input w-full"
                    id="dobHorizontal"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="label label-text"
                    htmlFor="country-horizontal"
                  >
                    Pick your Country
                  </label>
                  <select
                    className="select w-full"
                    id="country-horizontal"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="france">France</option>
                    <option value="australia">Australia</option>
                    <option value="spain">Spain</option>
                  </select>
                </div>
                <div>
                  <h6 className="text-sm text-base-content mb-1">Gender</h6>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="gender"
                        className="radio radio-primary"
                        id="maleHorizontal"
                        value="male"
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="label label-text text-base"
                        htmlFor="maleHorizontal"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="gender"
                        className="radio radio-primary"
                        id="femaleHorizontal"
                        value="female"
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="label label-text text-base"
                        htmlFor="femaleHorizontal"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Social Links */}
          {currentStep === 3 && (
            <div id="social-links-validation" className="space-y-5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="label label-text"
                    htmlFor="formValidationTwitterHorizontal"
                  >
                    TWITTER
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    id="formValidationTwitterHorizontal"
                    className="input w-full"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder="https://twitter.com/abc"
                  />
                </div>
                <div>
                  <label
                    className="label label-text"
                    htmlFor="formValidationFacebookHorizontal"
                  >
                    FACEBOOK
                  </label>
                  <input
                    type="text"
                    name="facebook"
                    id="formValidationFacebookHorizontal"
                    className="input w-full"
                    value={formData.facebook}
                    onChange={handleChange}
                    placeholder="https://facebook.com/abc"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="label label-text"
                    htmlFor="formValidationGoogleHorizontal"
                  >
                    GOOGLE+
                  </label>
                  <input
                    type="text"
                    name="google"
                    id="formValidationGoogleHorizontal"
                    className="input w-full"
                    value={formData.google}
                    onChange={handleChange}
                    placeholder="https://plus.google.com/abc"
                  />
                </div>
                <div>
                  <label
                    className="label label-text"
                    htmlFor="formValidationLinkedInHorizontal"
                  >
                    LINKEDIN
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    id="formValidationLinkedInHorizontal"
                    className="input w-full"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/abc"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Final Step */}
          {currentStep === 4 && (
            <div>
              <div className="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4">
                <h3 className="text-base-content/50 text-3xl">
                  Your Form has been Submitted
                </h3>
              </div>
            </div>
          )}

          {/* Button Group */}
          <div className="mt-5 flex items-center justify-between gap-y-2">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn btn-primary btn-prev"
                onClick={goToPreviousStep}
              >
                <span className="icon-[tabler--chevron-left] text-primary-content size-5 rtl:rotate-180"></span>
                <span>Back</span>
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                className="btn btn-primary btn-next"
                onClick={goToNextStep}
              >
                Next
                <span className="icon-[tabler--chevron-right] text-primary-content size-5 rtl:rotate-180"></span>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Finish
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
