// لجلب البيانات التي يتم ارجاعها من الدالة loader
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

// ملاحظة مهمة: لايمكننا استخدام اي من hooks بداخل loader بسبب ان loader ليست مكوناً من مكونات رياكت
// ماعادا ذلك يمكننا استخدام اي شيء بداخل loader
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
  } else {
    return response;
  }
}
