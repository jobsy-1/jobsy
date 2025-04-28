import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <h1>logn in Page</h1>
            <Link to='/app' >
                <button >Dashboard</button>
            </Link>
        </div>
    );
}
  
export default LoginPage;
  