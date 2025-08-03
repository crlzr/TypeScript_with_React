import { type ReactNode } from 'react';

// are required when showing the props in hint mode
type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

// required hwen showing the props in warning mode
type WarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function Infobox( props: InfoBoxProps) {
    const { children, mode } = props;

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }


  // this executes when mode is not hint
  const { severity } = props
  return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }