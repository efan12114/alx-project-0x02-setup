// pages/index.tsx

// ... (Keep existing imports like Head and styles)
import Card from '../components/common/Card';
import Button from '../components/common/Button'; // Add these lines

const Home: NextPage = () => {
  return (
    // A simple container to center content
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">

      <main className="w-full max-w-4xl space-y-8">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          ALX Listing App - Foundation Complete
        </h1>

        {/* A simple grid to display 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
          <Card/>
          <card/>
        </div>

        {/* A section for the reusable button */}
        <div className="flex justify-center pt-8">
          <Button />
        </div>

      </main>
    </div>
  );
};

export default Home;