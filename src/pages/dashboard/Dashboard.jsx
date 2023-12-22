import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      {/* <h2 className="text-2xl text-center">Dashboard Page</h2> */}

      {/* divider  */}
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <Link to="/newtask">
            <button className="btn btn-info text-xl">Create New Task</button>
          </Link>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <Link to="/previoustask">
            <button className="btn btn-accent text-xl">
              See Previous Task
            </button>
          </Link>
        </div>
      </div>
      {/* divider end */}

      {/* for todo, ongoing, completed  */}
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Task Satatus</div>

        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            <button className="btn btn-info text-lg">To-do</button>
            content
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            <button className="btn btn-warning  text-lg">Ongoing</button>
            content
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            <button className="btn btn-success  text-lg">Completed</button>
            content
          </div>
        </div>
      </div>
      {/* for todo, ongoing, completed end */}
    </div>
  );
};

export default Dashboard;
