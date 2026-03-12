import type { UserCardProps } from '../../architecture/types';
import { capitalize } from '../../architecture/utils/formatters';

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span className={`role-badge role-${user.role}`}>
        {capitalize(user.role)}
      </span>
    </div>
  );
}

export default UserCard;
