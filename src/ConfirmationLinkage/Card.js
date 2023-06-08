import classes from "./Card.module.css";
import LinkIcon from "@mui/icons-material/Link";

const Card = () => {
  return (
    <div className={classes.mainCard}>
      <div class={classes.card}>
        <div className={classes.line}></div>
        <div className={classes.mainDiv}>
          <div className={classes.logo}>
            <span>
              <LinkIcon style={{ color: "red" }} />
            </span>
          </div>
          <div className={classes.content}>
            <h4>Confirmation</h4>
            <p>Are you sure you want to link?</p>
            <div className="modal-buttons">
              <button
                type="button"
                className={`${classes.btnHover} ${classes.hoverColorYes}`}
              >
                Yes
              </button>
              <button
                type="button"
                className={`${classes.btnHover} ${classes.hoverColorNo}`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
