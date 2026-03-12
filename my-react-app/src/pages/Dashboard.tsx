import { useState, useEffect } from 'react';
import type { User } from '../architecture/types';
import { api } from '../architecture/services/api';
import UserCard from '../components/features/UserCard';

// Demonstrates: useEffect, useState, loading/error state, API service layer
function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Empty [] = run once on mount
    api
      .get<User[]>('/users')
      .then(setUsers)
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Failed to load users');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status-message">Loading...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
