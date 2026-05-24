import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import OverviewTab from './OverviewTab';
import BookingsTab from './BookingsTab';
import ResourcesTab from './ResourcesTab';

export default function DashboardClientPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'bookings':
        return <BookingsTab />;
      case 'resources':
        return <ResourcesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
}


