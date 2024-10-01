const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-blue-400 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
