import ClientLayout from '@/components/layout/ClientLayout';
import IntroSection from '@/components/sections/IntroSection';
import ProfileSection from '@/components/sections/ProfileSection';
import CaseFilesSection from '@/components/sections/CaseFilesSection';
import LogbookSection from '@/components/sections/LogbookSection';
import WorkbenchSection from '@/components/sections/WorkbenchSection';
import TransmissionSection from '@/components/sections/TransmissionSection';

export default function Home() {
  return (
    <ClientLayout>
      <IntroSection />
      <ProfileSection />
      <CaseFilesSection />
      <LogbookSection />
      <WorkbenchSection />
      <TransmissionSection />
    </ClientLayout>
  );
}
