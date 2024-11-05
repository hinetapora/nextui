// components/CategoryTabs.tsx

"use client";

import {Tabs, Tab} from "@nextui-org/react"; // Ensure this path is correct

const CategoryTabs = () => {
  // Placeholder data for new listings in the past 30 days
  const newListings = {
    cricket: 5,
    "premiere league": 103,
    "formula 1": 2,
    motogp: 3,
    tennis: 7,
    afl: 4,
    nfl: 3,
    rugby: 8,
    more: 1,
  };

  return (
    <Tabs
      aria-label="Categories"
      className="flex w-full overflow-x-auto no-scrollbar gap-1 p-0 border-b border-divider"
      color="primary"
      variant="underlined"
    >
      {Object.entries(newListings).map(([key, count]) => (
        <Tab
          key={key}
          aria-controls={`panel-${key}`}
          title={
            <div className="flex items-center space-x-1">
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              {count > 0 && <span className="text-xs text-gray-600">({count})</span>}
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
