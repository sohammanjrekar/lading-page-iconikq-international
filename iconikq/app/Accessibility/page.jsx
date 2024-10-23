import React from 'react'

const page = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-3">
        Accessibility Statement for{" "}
        <span className="text-blue-600">
          Iconikq International
        </span>
      </h2>
      
      <p className="text-lg mt-6">
        This is an accessibility statement from{" "}
        <span className="font-semibold text-blue-600">
          Iconikq International
        </span>.
      </p>
      
      <h3 className="text-2xl font-semibold mt-10">Conformance Status</h3>
      <p className="text-base mt-4">
        The{" "}
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          className="text-blue-600 hover:underline"
        >
          Web Content Accessibility Guidelines (WCAG)
        </a>{" "}
        defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.{" "}
        <span className="font-semibold text-blue-600">Iconikq International</span> is{" "}
        <span className="font-bold text-green-600">fully conformant</span> with{" "}
        <span className="font-semibold text-blue-600">WCAG 2.1 level AA</span>.
        This means that the content fully conforms to the accessibility standard without any exceptions.
      </p>
      
      <h3 className="text-2xl font-semibold mt-10">Feedback</h3>
      <p className="text-base mt-4">
        We welcome your feedback on the accessibility of{" "}
        <span className="font-semibold text-blue-600">Iconikq International</span>. Please let us know if you encounter accessibility barriers:
      </p>
      
      <ul className="list-none mt-6 space-y-3">
        <li>
          <strong>Phone:</strong>{" "}
          <span className="text-blue-600">+91 9870725060</span>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@iconikqinternational.com"
            className="text-blue-600 hover:underline"
          >
            info@iconikqinternational.com
          </a>
        </li>
        <li>
          <strong>Visitor Address:</strong>{" "}
          <span className="text-blue-600">704/705, Filix, Opposite Asian Paints, LBS Marg, Bhandup West, Mumbai – 400078</span>
        </li>
      </ul>
      
      <hr className="border-t border-gray-300 my-10" />
      
      <h3 className="text-2xl font-semibold">Date</h3>
      <p className="text-base mt-4">
        This statement was created on{" "}
        <strong className="text-blue-600">24 October 2024</strong> using the{" "}
        <a
          href="https://www.w3.org/WAI/planning/statements/"
          className="text-blue-600 hover:underline"
        >
          W3C Accessibility Statement Generator Tool
        </a>.
      </p>
    </div>
  )
}

export default page
