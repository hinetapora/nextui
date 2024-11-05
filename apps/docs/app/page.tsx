// app/page.tsx

import {Spacer} from "@nextui-org/spacer";
import {A11yOtb} from "@/components/marketing/a11y-otb";
import {DarkMode} from "@/components/marketing/dark-mode";
import {Customization} from "@/components/marketing/customization";
import {EventsSchedule} from "@/components/marketing/events-schedule";
import {getData} from "@/utils/getData";

export default async function Home() {
  const data = await getData(); // Use the utility function

  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <EventsSchedule events={data.events} />
        <Spacer y={24} />
        <A11yOtb />
        <DarkMode />
        <Customization />
      </section>
    </main>
  );
}
