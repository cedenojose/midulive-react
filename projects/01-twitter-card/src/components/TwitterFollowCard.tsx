import { useState } from "react";

interface TwitterFollowCardProps {
  children: React.ReactNode;
  userName: string;
  initialIsFollowing?: boolean;
  formatUserName: (userName: string) => string;
}
const TwitterFollowCard = ({
  children,
  userName = "unknown",
  initialIsFollowing,
  formatUserName,
}: TwitterFollowCardProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(
    initialIsFollowing || false
  );

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/twitter/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
        >
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};
export default TwitterFollowCard;
// Gorillaz Music
// @gorillazOficial
