interface ModeButtonProps {
  children: string;
  OnClick?: () => void;
}

function ModeButton(props: ModeButtonProps) {
  const { children, OnClick } = props;

  return (
    <button className="mode-button" onClick={OnClick}>
      {children}
    </button>
  );
}

export default ModeButton;
