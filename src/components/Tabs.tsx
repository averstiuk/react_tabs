import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selecledTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={classNames(
                  'button',
                  { 'is-active is-primary': selectedTabId === tab.id },
                )}
                type="button"
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p data-cy="tab-content">{selecledTab?.content}</p>
    </>
  );
};