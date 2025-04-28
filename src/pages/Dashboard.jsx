import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to='/'>
                <button >landing Page</button>
            </Link>
        </div>
    );
}

export default Dashboard;
  