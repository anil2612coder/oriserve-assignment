const VersionDetail = ({ versionData }) => {
  const { name, version, dependencies, devDependencies } = versionData;

  return (
    <div className="p-8 bg-gradient-to-r from-violet-200 to-indigo-300 rounded-2xl shadow-lg max-w-4xl mx-auto text-gray-900">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-800">
          {name}
          <span className="text-gray-700"> @{version}</span>
        </h1>
      </div>

      {/* Dependencies Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-violet-400 inline-block text-indigo-700">
          Dependencies
        </h2>
        {Object.keys(dependencies).length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {Object.entries(dependencies).map(([dep, ver]) => (
              <li
                key={dep}
                className="flex items-center bg-white bg-opacity-80 p-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                <span className="text-lg font-medium text-indigo-600">
                  {dep}
                </span>
                <span className="ml-auto text-sm text-gray-700">v{ver}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-md text-gray-700">No dependencies listed.</p>
        )}
      </section>

      {/* Dev Dependencies Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-violet-400 inline-block text-indigo-700">
          Dev Dependencies
        </h2>
        {Object.keys(devDependencies).length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {Object.entries(devDependencies).map(([dep, ver]) => (
              <li
                key={dep}
                className="flex items-center bg-white bg-opacity-80 p-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                <span className="text-lg font-medium text-indigo-600">
                  {dep}
                </span>
                <span className="ml-auto text-sm text-gray-700">v{ver}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-md text-gray-700">No dev dependencies listed.</p>
        )}
      </section>
    </div>
  );
};

export default VersionDetail;
