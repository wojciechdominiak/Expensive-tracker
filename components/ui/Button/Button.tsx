import classes from "./Button.module.scss";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  modifier?: "cta" | "outline";
}

const Button = ({ modifier, onClick, label }: IProps) => {
  const className = modifier ? modifier : "cta";

  return (
    <button className={classes[className] + " button"} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
