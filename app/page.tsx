"use client";
const Home = () => {
  interface post {
    owner: string;
    content: String;
  }
  const posts: post[] = [
    { owner: "trawner", content: "his name is trawner" },
    { owner: "trawner2", content: "his name is trawner2" },
    { owner: "trawner3", content: "his name is trawner4" },
  ];

  const PostList: React.FC<{ posts: post[] }> = ({ posts }) => {
    return posts.map((p: post) => <p>{p.content}</p>);
  };

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">What's on your mind</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Select your stance</span>
      <div className="flex justify-between w-full h-screen">
        <div className="w-1/3 bg-gradient-to-r from-green-400 to-green-500  h-full rounded-lg shadow-md">
          <h2 className="text-center">Support</h2>
          {posts.map((p: post) => (
            <p>{p.content}</p>
          ))}
        </div>
        <div className="w-1/3 bg-gradient-to-r from-red-400 to-red-500  h-full rounded-lg shadow-md">
          <h2 className="text-center">Against</h2>
          {posts.map((p: post) => (
            <p>{p.content}</p>
          ))}
        </div>
        <div className="w-1/3 bg-gradient-to-r from-white to-gray-200 h-full rounded-lg shadow-md">
          <h2 className="text-center">Neutral</h2>
        </div>
      </div>
    </section>
  );
};
export default Home;
