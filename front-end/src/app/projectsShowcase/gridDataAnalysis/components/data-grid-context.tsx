import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import {HotTable} from '@handsontable/react';

interface HotTableContextType {
  hotTableComponent: React.RefObject<HotTable>;
  updateTrigger: boolean;
  triggerUpdate: () => void;
}

const HotTableContext = createContext<HotTableContextType | null>(null);

export const useHotTable = () => {
  const context = useContext(HotTableContext);
  if (!context) {
    throw new Error('useHotTable must be used within a HotTableProvider');
  }
  return context;
};

export const HotTableProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const hotTableComponent = useRef<HotTable>(null);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const triggerUpdate = useCallback(() => {
    setUpdateTrigger((prev) => !prev);
  }, []);

  return (
    <HotTableContext.Provider
      value={{hotTableComponent, updateTrigger, triggerUpdate}}
    >
      {children}
    </HotTableContext.Provider>
  );
};
