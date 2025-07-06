export const DarkMode = ({ handleChange, isChecked }) => {
  return (
    <div className="darkModeToggle">
      <input type="checkbox" onChange={handleChange} checked={isChecked} id="check" className="toggle"/>
      <label className="ToggleLabel" htmlFor="check">
        <span className="icon-toggle">{isChecked ? "🌙" : "☀️"}</span>
      </label>
    </div>
  );
};
