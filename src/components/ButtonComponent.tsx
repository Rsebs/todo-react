interface Props {
  label: string;
  onClick: () => void;
}

export const ButtonComponent = ({ label, onClick }: Props) => {
  return <button onClick={onClick}>{label}</button>;
};
