// نسخدمه لإظهار شيء بديل اثناء انتظارنا للبيانات
import { Suspense } from "react";

// useLoaderData: لجلب البيانات التي يتم ارجاعها من الدالة loader
import { useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };

    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });

    // json: تعمل نفس الكائن Response وتختصر علينا لكتابة اكواد اقل
    // throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// ملاحظة مهمة: لايمكننا استخدام اي من hooks بداخل loader بسبب ان loader ليست مكوناً من مكونات رياكت
// ماعادا ذلك يمكننا استخدام اي شيء بداخل loader
export async function loader() {
  return {
    events: loadEvents(),
  };
}
