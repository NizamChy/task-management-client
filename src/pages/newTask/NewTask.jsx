

const NewTask = () => {
  return (
    <div>


      {/* Form */}
      <div className="bg-blue-300 p-8">
        <div className="max-w-md mx-auto bg-cyan-200 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Task Details</h2>

          {/* Title Input */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter description"
              required
            ></textarea>
          </div>

          {/* Deadline Input */}
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
              Deadline
            </label>
            <input
              type="datetime-local"
              id="deadline"
              name="deadline"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Priority Input */}
          <div className="mb-4">
            <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
      {/* Form end */}
    </div>
  );
};

export default NewTask;
