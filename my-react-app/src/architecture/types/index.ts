// User domain types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'viewer' | 'editor';
}

// Generic API response wrapper — common interview pattern
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Component prop interfaces — always named ComponentNameProps
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export interface UserCardProps {
  user: User;
}
