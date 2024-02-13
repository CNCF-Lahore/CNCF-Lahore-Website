import React from "react";

function CodeOfConduct() {
  return (
    <div className="w-full pt-[150px] px-[45px] pb-[50px] text-white">
      <h1 className="text-4xl font-bold mb-4 p-[20px] bg-[#b20710]">
        Code of Conduct
      </h1>

      <section className="mb-8">
        <p className="text-[16px]">
          The Linux Foundation and its project communities are dedicated to
          providing a harassment-free experience for participants at all of our
          events, whether they are held in person or virtually. Linux Foundation
          events are working conferences intended for professional networking
          and collaboration within the open-source community. They exist to
          encourage the open exchange of ideas and expression and require an
          environment that recognizes the inherent worth of every person and
          group. While at Linux Foundation events or related ancillary or social
          events, any participants, including members, speakers, attendees,
          volunteers, sponsors, exhibitors, booth staff, and anyone else, should
          not engage in harassment in any form.
        </p>
      </section>

      <section className="mb-8 p-[20px] bg-[#b20710] ">
        <h2 className="text-2xl font-bold mb-2">Expected Behavior</h2>
        <p className="text-[16px]">
          All event participants, whether they are attending an in-person event
          or a virtual event, are expected to behave in accordance with
          professional standards, with both this Code of Conduct as well as
          their respective employer’s policies governing appropriate workplace
          behavior and applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Unacceptable Behavior</h2>
        <p className="text-[16px]">
          Harassment will not be tolerated in any form, whether in person or
          virtually, including, but not limited to, harassment based on gender,
          gender identity and expression, sexual orientation, disability,
          physical appearance, body size, race, age, religion, or any other
          status protected by laws in which the conference or program is being
          held. Harassment includes the use of abusive, offensive, or degrading
          language, intimidation, stalking, harassing photography or recording,
          inappropriate physical contact, sexual imagery, and unwelcome sexual
          advances or requests for sexual favors. Any report of harassment at
          one of our events, whether in person or virtual, will be addressed
          immediately. Participants asked to stop any harassing behavior are
          expected to comply immediately. Anyone who witnesses or is subjected
          to unacceptable behavior should notify a conference organizer at once.
        </p>
      </section>

      <section className="mb-8 p-[20px] bg-[#b20710]">
        <h2 className="text-2xl font-bold mb-2">
          Consequences of Unacceptable Behavior
        </h2>
        <p className="text-[16px]">
          If a participant engages in harassing behavior, whether in person or
          virtually, the conference organizers may take any action they deem
          appropriate depending on the circumstances, ranging from issuance of a
          warning to the offending individual to expulsion from the conference
          with no refund. The Linux Foundation reserves the right to exclude any
          participant found to be engaging in harassing behavior from
          participating in any further Linux Foundation events, trainings, or
          other activities.
        </p>
        <p className="text-[16px]">
          If a participant (or individual wishing to participate in a Linux
          Foundation event, in-person and/or virtual), through postings on
          social media or other online publications or another form of
          electronic communication, engages in conduct that violates this
          policy, whether before, during or after a Linux Foundation event, The
          Linux Foundation may take appropriate corrective action, which could
          include imposing a temporary or permanent ban on an individual’s
          participation in future Linux Foundation events.
        </p>
      </section>

      <section className="mb-8 mt-5">
        <h2 className="text-[15px] font-bold mb-2">
          What To Do If You Witness or Are Subject To Unacceptable Behavior
        </h2>
        <p className="text-[16px] ">
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns relating to harassment, please contact a
          member of the conference staff immediately. You are also encouraged to
          contact Angela Brown, Senior VP & General Manager of Events, at{" "}
          <a
            href="mailto:angela@linuxfoundation.org"
            className="text-[#E50914] hover:underline"
          >
            angela@linuxfoundation.org
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Incident Response</h2>
        <p className="text-[16px]">
          Our staff has taken incident response training and responds to
          harassment reports quickly and thoroughly. As referenced above, if a
          participant engages in harassing behavior, whether in-person or
          virtually, the conference organizers may take any action they deem
          appropriate, ranging from issuance of a warning to the offending
          individual to expulsion from the conference with no refund, depending
          on the circumstances. The Linux Foundation reserves the right to
          exclude any participant found to be engaging in harassing behavior
          from participating in any further Linux Foundation events, trainings
          or other activities.
        </p>
      </section>

      <section className="mb-8 p-[20px] bg-[#b20710]">
        <h2 className="text-2xl font-bold mb-2">
          Health and Safety Requirements
        </h2>
        <p className="text-[16px]">
          It is necessary for all attendees to cooperate and protect one
          another. For this reason, The Linux Foundation’s events may have
          health and safety requirements (the “Health and Safety Requirements”).
          The specific requirements may vary from event to event, and will be
          communicated in writing prior to and during the event.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Pre-Event Concerns</h2>
        <p className="text-[16px]">
          If you are planning to attend an upcoming event, whether in-person or
          virtually and have concerns regarding another individual who may be
          present, please contact Angela Brown (
          <a
            href="mailto:angela@linuxfoundation.org"
            className="text-[#E50914] hover:underline"
          >
            angela@linuxfoundation.org
          </a>
          ). Precautions will be taken to ensure your comfort and safety,
          including, but not limited to providing an escort, prepping onsite
          event staff, keeping victim and harasser from attending the same
          talks/social events, and providing onsite contact cell phone numbers
          for immediate contact.
        </p>
      </section>
    </div>
  );
}

export default CodeOfConduct;
