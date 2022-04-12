import { Auth } from "aws-amplify";
import Construction from "../../screens/Construction/Construction";

export default function Storage() {
  return (
    <>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <Construction />
    </>
  );
}
