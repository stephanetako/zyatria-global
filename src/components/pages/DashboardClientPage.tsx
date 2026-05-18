import React, { useState } from 'react';
import DashboardLayout from '../dashboard/DashboardLayout';
import OverviewTab from '../dashboard/OverviewTab';
import BookingsTab from '../dashboard/BookingsTab';
import ResourcesTab from '../dashboard/ResourcesTab';

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
      case 'analytics':
        return <AnalyticsPlaceholder />;
      case 'team':
        return <TeamPlaceholder />;
      case 'settings':
        return <SettingsPlaceholder />;
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

// Placeholder components for other tabs
function AnalyticsPlaceholder() {
  return (
    <div className="text-center py-12">
      <h3 className="text-2xl font-bold mb-2">Analytics</h3>
      <p className="text-muted-foreground">Tableau de bord analytics en cours de développement</p>
    </div>
  );
}

function TeamPlaceholder() {
  return (
    <div className="text-center py-12">
      <h3 className="text-2xl font-bold mb-2">Gestion d'Équipe</h3>
      <p className="text-muted-foreground">Gestion d'équipe en cours de développement</p>
    </div>
  );
}

function SettingsPlaceholder() {
  return (
    <div className="text-center py-12">
      <h3 className="text-2xl font-bold mb-2">Paramètres</h3>
      <p className="text-muted-foreground">Paramètres en cours de développement</p>
    </div>
  );
}
