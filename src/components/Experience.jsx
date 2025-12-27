const Experience = () => {
  return (
    <div id="experience" className="container mt-11">
      <h2 className="headline-2">Work Experience</h2>

      <div className="space-y-12">

        {/* Fourth Experience - Latest */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
          <div className="md:w-1/3 text-lg font-semibold">
            Aug 2025 - Present
          </div>
          <div className="md:w-2/3">
            <p className="font-bold text-xl">Automate QA Engineer</p>
            <p className="font-bold text-l mb-5">Wing Bank</p>
            <div className="text-zinc-400">
              <ul className="list-disc list-inside">
                <li>Developed and maintained automated test scripts using Katalon Studio (Java/Groovy)</li>
                <li>Built and executed mobile automation for iOS and Android</li>
                <li>Collaborated with Scrum team and developers</li>
                <li>Executed test scripts in production environment</li>
                <li>Utilized Jira and Bitbucket for tracking and version control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Experience */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
          <div className="md:w-1/3 text-lg font-semibold">
            Nov 2024 - Jul 2025
          </div>
          <div className="md:w-2/3">
            <p className="font-bold text-xl">Software Testing Engineer</p>
            <p className="font-bold text-l mb-5">Across Byte</p>
            <div className="text-zinc-400">
              <ul className="list-disc list-inside">
                <li>Developed test cases and executed test runs in Test Management System</li>
                <li>Performed API testing including functional, stress, and load testing using JMeter</li>
                <li>Conducted mobile and web application testing</li>
                <li>Worked with Bakong payment system test trails</li>
                <li>Tested multiple projects including banking app, film app, chatbot, and CRM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Experience */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
          <div className="md:w-1/3 text-lg font-semibold">
            Jan 2024 - Nov 2024
          </div>
          <div className="md:w-2/3">
            <p className="font-bold text-xl">QA Engineer</p>
            <p className="font-bold text-l mb-5">Vattanac Bank</p>
            <div className="text-zinc-400">
              <ul className="list-disc list-inside">
                <li>Performed functional testing on Mobile Banking, Merchant, and Agency Banking applications</li>
                <li>Designed test cases and prepared test reports</li>
                <li>Reported and tracked bugs using Jira</li>
                <li>Worked in Scrum methodology</li>
                <li>Collaborated closely with technical teams</li>
              </ul>
            </div>
          </div>
        </div>

        {/* First Experience - Oldest */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
          <div className="md:w-1/3 text-lg font-semibold">
            Feb 2023 - Jan 2024
          </div>
          <div className="md:w-2/3">
            <p className="font-bold text-xl">Quality Assurance Intern</p>
            <p className="font-bold text-l mb-5">Sathapana Bank</p>
            <div className="text-zinc-400">
              <ul className="list-disc list-inside">
                <li>Performed UAT on Card System ( Visa Card, Master Card )</li>
                <li>Created test cases based on business requirements</li>
                <li>Designed test matrices</li>
                <li>Reported defects using Jira and Excel</li>
                <li>Worked with Waterfall methodology</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
