import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/images/todo_banner.jpg';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Check if the user exists
    if (user) {
      // User exists, navigate to the dashboard
      navigate('/dashboard');
    } else {
      // User doesn't exist, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <div>
      <div
        className="hero min-h-[87vh]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <button className="btn btn-primary text-xl" onClick={handleExploreClick}>
              Lets Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
