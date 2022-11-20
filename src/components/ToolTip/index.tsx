import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode, useEffect, useState } from 'react';

import styles from './styles.module.scss';

interface TooltipProps {
  children: ReactNode;
  content: String;
}

export function ToolTip({ children, content }: TooltipProps) {
  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    setRenderContent(true);
  }, []);

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className={styles.trigger}>
          {renderContent && (
            children
          )}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.content}>
            {content}
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}