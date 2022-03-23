import { Auth } from 'aws-amplify';

export default function Storage() {
  return <>
    <button onClick={() => Auth.signOut()}>Sign Out</button>
    <div className="row">
      <div className="col-auto p-5">
        <div >HI</div>
      </div>
    </div>
  </>
}