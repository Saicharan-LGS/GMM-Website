import "./placementTeamForm.css";
const placementTeamForm = ({ title, handleSubmit }) => {
  return (
    <div className="placement-form">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Work Email" />
        <input type="text" placeholder="Mobile Number" />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Designation" />

        <button className="formbtn">Submit</button>
      </form>
    </div>
  );
};

export default placementTeamForm;
