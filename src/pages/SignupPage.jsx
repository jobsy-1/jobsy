import { Link } from 'react-router-dom';

function SignupPage() {
    return (
        <div>
            <h1>Signup Page</h1>
            <Link to='/app' >
                <button >Dashboard</button>
            </Link>
        </div>
    );
}

export default SignupPage;
  