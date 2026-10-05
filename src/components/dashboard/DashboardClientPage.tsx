import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import OverviewTab from './OverviewTab';
import BookingsTab from './BookingsTab';
import ResourcesTab from './ResourcesTab';

export default function DashboardClientPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [lang, setLang] = useState<'en' | 'fr' | 'es' | 'pt'>('fr');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab lang={lang} />;
      case 'bookings':
        return <BookingsTab lang={lang} />;
      case 'resources':
        return <ResourcesTab lang={lang} />;
      default:
        return <OverviewTab lang={lang} />;
    }
  };

  return (
    <DashboardLayout 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      lang={lang}
      onLangChange={setLang}
    >
      {renderContent()}
    </DashboardLayout>
  );
}



