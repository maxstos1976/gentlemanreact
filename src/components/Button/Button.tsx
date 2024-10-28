import "./button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    <button className="custon-button" onClick={parentMethod}>
      {label}
    </button>
  );
};
