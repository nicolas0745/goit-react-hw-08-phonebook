import Button from '@mui/material/Button';

const ButtonUi = ({ text, onHandleClick = null, type = 'button' }) => {
  return (
    <Button variant="contained" type={type} onClick={onHandleClick}>
      {text}
    </Button>
  );
};

export { ButtonUi };
