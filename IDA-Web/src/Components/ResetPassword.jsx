import {useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function Resetpass() {

    const nav = useNavigate();
    const {token} = useParams()

  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/auth/reset/"+token, { password })
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            nav("/");
          }
          console.log(res.data);
          
        })
        .catch((e) => console.log("error", e));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
        <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "300px" }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Resetpass