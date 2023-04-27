import * as gtag from "../lib/gtag";

export default function Home() {
  const onFormSubmit = () => {
    console.log("Hello i am being submitted");
    gtag.event({
      action: "submitted_form",
      category: "contact",
      label: "form submitted",
      value: "contacting",
    });
  };

  return (
    <main>
      <h3>Google analytics</h3>
      <button
        onClick={onFormSubmit}
        className="border p-2 bg-slate-600 text-teal-50"
      >
        Click me
      </button>
    </main>
  );
}
