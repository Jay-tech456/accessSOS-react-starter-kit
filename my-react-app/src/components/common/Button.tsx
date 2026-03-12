import type { ButtonProps } from '../../architecture/types';

const variantClass: Record<string, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'btn-danger',
};

function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      className={`btn ${variantClass[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
