import { customTheme } from '@/src/utils/theme';
import React, { ReactNode } from 'react';

interface RedBackgroundComponentProps {
  children: ReactNode;
}

const MobileBackgroundComponent: React.FC<RedBackgroundComponentProps> = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: customTheme.palette.primary.dark,
    padding: '20px',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    height: '250px',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default MobileBackgroundComponent;
