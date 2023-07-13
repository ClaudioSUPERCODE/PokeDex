import '../css/Toggle.css'
const LightDarkMode = ({ toggle }) => {

  return (
    <div className="toggle">
      <input type="checkbox" id="toggle" onClick={toggle} />
      <label htmlFor="toggle"></label>
      {/* <button onClick={toggle}>Toggle Theme</button> */}
    </div>
  )
}

export default LightDarkMode;