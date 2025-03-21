import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskUnblocker Privacy Policy",
  description: "Privacy Policy for TaskUnblocker Chrome Extension",
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl font-bold mb-6">PRIVACY POLICY FOR TASKUNBLOCKER CHROME EXTENSION</h1>
        <p className="text-gray-600 dark:text-gray-400">Last Updated: {currentDate}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">INTRODUCTION</h2>
        <p>
          This Privacy Policy explains how TaskUnblocker (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles your information when you use our Chrome extension. 
          We are committed to protecting your privacy and being transparent about our data practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">INFORMATION WE COLLECT</h2>
        <p>
          TaskUnblocker operates entirely locally on your device and collects minimal data to provide its core functionality. Specifically, we collect:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Website Navigation Data</strong>: We monitor website visits solely to determine if you are attempting to access a website on your blocked list while Focus Mode is active.</li>
          <li><strong>User Activity Data</strong>: We track task completion and time spent on websites to manage the reward system that allows temporary access to blocked sites.</li>
          <li><strong>User Preferences</strong>: This includes your to-do list items, blocked website list, time reward settings, and Focus Mode status.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">HOW WE USE YOUR INFORMATION</h2>
        <p>
          We use the collected information solely to provide the core functionality of TaskUnblocker:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>To block distracting websites based on your settings</li>
          <li>To track completed tasks and manage earned browsing time</li>
          <li>To save your preferences and to-do list items</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">DATA STORAGE AND RETENTION</h2>
        <p>
          All data collected by TaskUnblocker is stored locally on your device using Chrome&apos;s storage API. 
          Some data may be synchronized across your devices if you are signed into Chrome and have enabled sync.
        </p>
        <p>We do not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Store your data on external servers</li>
          <li>Transmit your data to third parties</li>
          <li>Use your data for advertising or analytics</li>
        </ul>
        <p>Data is retained until you:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remove tasks from your to-do list</li>
          <li>Modify your blocked website list</li>
          <li>Uninstall the extension</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">YOUR DATA PROTECTION RIGHTS</h2>
        <p>
          Under the General Data Protection Regulation (GDPR), you have rights including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right to Access</strong>: You can access all your data directly through the extension interface.</li>
          <li><strong>Right to Rectification</strong>: You can modify your tasks and settings at any time.</li>
          <li><strong>Right to Erasure</strong>: You can delete tasks, clear settings, or uninstall the extension to remove your data.</li>
          <li><strong>Right to Restrict Processing</strong>: Since all processing occurs locally, you can disable the extension to stop processing.</li>
          <li><strong>Right to Data Portability</strong>: Your data is stored in Chrome&apos;s storage and may be synchronized across your devices if you use Chrome sync.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">COOKIES AND TRACKING</h2>
        <p>
          TaskUnblocker does not use cookies or any third-party tracking technologies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">CHILDREN&apos;S PRIVACY</h2>
        <p>
          TaskUnblocker does not knowingly collect information from children under 13 years of age.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">CONTACT US</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="my-4">
          <a href="mailto:info@giusepperenna.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            info@giusepperenna.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">CONSENT</h2>
        <p>
          By using TaskUnblocker, you consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
} 