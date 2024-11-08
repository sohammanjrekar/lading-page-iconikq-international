import React from "react";
export const metadata = {
  title: "ICONIKQ | Privacy Policy",
  description:
    "Read our privacy policy to understand how ICONIKQ collects, uses, and protects your information.",
  keywords: "privacy policy, data protection, ICONIKQ",
};

const PrivacyPolicy = () => {
  return (
    <div className="p-6 mt-24 max-w-[80vw] mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Last updated: October 23, 2024
      </p>

      <p className="mb-4">
        This Privacy Policy describes Our policies and procedures on the
        collection, use, and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p className="mb-4">
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy. This Privacy Policy has been
        created with the help of the{" "}
        <a
          href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Free Privacy Policy Generator
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Interpretation and Definitions
      </h2>

      <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
      <p className="mb-4">
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        plural.
      </p>

      <h3 className="text-xl font-semibold mb-2">Definitions</h3>
      <p className="mb-2">For the purposes of this Privacy Policy:</p>

      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">
          <strong>Account</strong> means a unique account created for You to
          access our Service or parts of our Service.
        </li>
        <li className="mb-2">
          <strong>Affiliate</strong> means an entity that controls, is
          controlled by or is under common control with a party, where
          &quot;control&quot; means ownership of 50% or more of the shares,
          equity interest, or other securities entitled to vote for election of
          directors or other managing authority.
        </li>
        <li className="mb-2">
          <strong>Company</strong> (referred to as either &quot;the
          Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
          this Agreement) refers to iconikq international, 704/705, Filix,
          Opposite Asian Paints, LBS Marg, Bhandup West, Mumbai: 400078.
        </li>
        <li className="mb-2">
          <strong>Cookies</strong> are small files that are placed on Your
          computer, mobile device, or any other device by a website, containing
          details of Your browsing history on that website among its many uses.
        </li>
        <li className="mb-2">
          <strong>Country</strong> refers to: Maharashtra, India.
        </li>
        <li className="mb-2">
          <strong>Device</strong> means any device that can access the Service
          such as a computer, a cellphone, or a digital tablet.
        </li>
        <li className="mb-2">
          <strong>Personal Data</strong> is any information that relates to an
          identified or identifiable individual.
        </li>
        <li className="mb-2">
          <strong>Service</strong> refers to the Website.
        </li>
        <li className="mb-2">
          <strong>Service Provider</strong> means any natural or legal person
          who processes the data on behalf of the Company. It refers to
          third-party companies or individuals employed by the Company to
          facilitate the Service, to provide the Service on behalf of the
          Company, to perform services related to the Service, or to assist the
          Company in analyzing how the Service is used.
        </li>
        <li className="mb-2">
          <strong>Usage Data</strong> refers to data collected automatically,
          either generated by the use of the Service or from the Service
          infrastructure itself (for example, the duration of a page visit).
        </li>
        <li className="mb-2">
          <strong>Website</strong> refers to iconikq international, accessible
          from{" "}
          <a
            href="https://iconikqinternational.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://iconikqinternational.com/
          </a>
          .
        </li>
        <li className="mb-2">
          <strong>You</strong> means the individual accessing or using the
          Service, or the company, or other legal entity on behalf of which such
          individual is accessing or using the Service, as applicable.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Collecting and Using Your Personal Data
      </h2>

      <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>

      <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
      <p className="mb-4">
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li className="mb-2">Email address</li>
        <li className="mb-2">First name and last name</li>
        <li className="mb-2">Phone number</li>
        <li className="mb-2">Usage Data</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Usage Data</h4>
      <p className="mb-4">
        Usage Data is collected automatically when using the Service. Usage Data
        may include information such as Your Device&apos;s Internet Protocol
        address (e.g. IP address), browser type, browser version, the pages of
        our Service that You visit, the time and date of Your visit, the time
        spent on those pages, unique device identifiers, and other diagnostic
        data.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
