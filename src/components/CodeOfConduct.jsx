import React from "react";

function CodeOfConductPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Code of Conduct</h1>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Our Values</h2>
        <ul className="list-disc pl-4">
          <li>
            <strong>Inclusivity:</strong> We welcome individuals from all
            backgrounds and identities.
          </li>
          <li>
            <strong>Respect:</strong> Treat others with kindness, empathy, and
            consideration.
          </li>
          <li>
            <strong>Openness:</strong> Encourage open communication and
            constructive feedback.
          </li>
          <li>
            <strong>Collaboration:</strong> Work together to foster a positive
            and supportive community.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Expected Behavior</h2>
        <ul className="list-disc pl-4">
          <li>Be respectful and considerate towards others.</li>
          <li>Avoid offensive language, harassment, or discrimination.</li>
          <li>Listen actively and engage in constructive dialogue.</li>
          <li>Respect the privacy and personal boundaries of others.</li>
          <li>Follow the guidelines and rules outlined on our platform.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Unacceptable Behavior</h2>
        <p className="mb-2">The following behaviors are not tolerated:</p>
        <ul className="list-disc pl-4">
          <li>Harassment, intimidation, or threats of any kind.</li>
          <li>
            Discrimination based on race, ethnicity, gender, sexual orientation,
            religion, disability, or any other characteristic.
          </li>
          <li>Personal attacks or insults towards individuals or groups.</li>
          <li>
            Disruptive behavior that interferes with the experiences of others.
          </li>
          <li>Any illegal activity or violation of our terms of service.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Reporting Violations</h2>
        <p>
          If you witness or experience behavior that violates our Code of
          Conduct, please report it immediately to{" "}
          <a
            href="mailto:report@example.com"
            className="text-blue-600 hover:underline"
          >
            report@example.com
          </a>
          . Our team will review all reports promptly and take appropriate
          action.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Enforcement</h2>
        <p>
          We reserve the right to enforce our Code of Conduct at our discretion.
          Depending on the severity of the violation, consequences may include
          warnings, temporary suspension, or permanent expulsion from our
          community.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Conclusion</h2>
        <p>
          Thank you for helping us maintain a welcoming and inclusive
          environment for all members of our community. By adhering to this Code
          of Conduct, we can ensure that everyone feels safe, respected, and
          valued.
        </p>
      </section>
    </div>
  );
}

export default CodeOfConductPage;
