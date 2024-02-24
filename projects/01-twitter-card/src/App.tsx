import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

interface User {
  name: string;
  userName: string;
  isFollowing: boolean;
}

const users: User[] = [
  {
    name: "Miguel Angel Duran",
    userName: "midudev",
    isFollowing: true,
  },
  {
    name: "Brais Moure",
    userName: "MoureDev",
    isFollowing: false,
  },
  {
    name: "freeCodeCamp.org en Español",
    userName: "freeCodeCampES",
    isFollowing: false,
  },
  {
    name: "Monitor Dolar Vzla",
    userName: "monitordolarvla",
    isFollowing: true,
  },
];

const App = () => {
  const formatUserName = (userName: string) => `@${userName}`;

  return (
    <section className="App">
      {users.map((user) => {
        const { name, userName, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            formatUserName={formatUserName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
};
export default App;
