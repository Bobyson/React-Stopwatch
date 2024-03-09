import './buttons.css'

function Buttons(props) {
    const StartButton = (
        <div className="btn btn-start" onClick={props.handleStart}>
            Start
        </div>
    );

    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-reset" onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-pause-resume" onClick={props.handlePauseResume}>
                {props.isPaused? "Resume" : "Pause"}
            </div>
        </div>
    )

  return (
    <div className="buttons">
      <div>{props.isActive? ActiveButtons : StartButton}</div>
    </div>
  );
}

export default Buttons;
