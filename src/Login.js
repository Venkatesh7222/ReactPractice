import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  return (
    <div>
      <div className="contents" style={{ paddingTop: 80 }}>
        <center>
          <Card
            style={{
              backgroundColor: "white",
              height: 510,
              position: "relative",
              width: 360,
            }}
          >
            <br></br>
            <text className="text" style={{ marginTop: 80 }}>
              {" "}
              LOGIN
            </text>
            <br></br>
            <br></br>
            <icon className="icon">
              <FontAwesomeIcon icon={faUser} />
            </icon>
            <input
              type="text"
              className="text-design"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <br></br>
            <br></br>
            <icon className="icon2">
              <FontAwesomeIcon icon={faKey} />
            </icon>
            <input
              type="password"
              className="text-design"
              placeholder="********"
              name="pwd"
              required
            />
            <br></br>
            <div className="checkbox">
              <input type="checkbox" /> <text>Remember Me</text>
            </div>
            <br></br>
            <button
              onClick={() => {
                history.push("dashboard");
              }}
              type="submit"
              className="button"
            >
              LOGIN
            </button>
            <br></br>
            <text className="text3"> Or login with </text> <br></br>
            <br></br>
            <Button className="social " variant="outline-danger">
              <FaFacebookSquare className="icon3" />
              <text style={{ color: "blue" }}>Facebook</text>
            </Button>
            <Button className="social" variant="outlinep-primary">
              <FcGoogle className="icon3" />
              google
            </Button>
            <div className="text4">
              <text>Not a Member?</text> <a href="app.js">Sign up now </a>
            </div>
          </Card>
        </center>
      </div>
    </div>
  );
}
