import React from 'react';
import { LoadingButton } from '@mui/lab';
 
interface CustomButtonProps {
  onClick?: () => void; 
  category?: string;
  className?: string; 
  loading?: boolean; 
  disabled?: boolean;
  icon?: React.ReactNode;
}
 
const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  category,
  className,
  loading = false,
  disabled = false,
  icon = null,
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      className={`custom-button ${category} ${className}`}
      startIcon={icon ? icon : null} // Condition to render the icon only if provided
      variant="contained"
      size='small'
    >
  {category}
    </LoadingButton>
  );
};
 
export default CustomButton;