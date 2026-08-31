import { defineConfig } from "vitepress";

// Product-handoff documentation: a step-by-step walkthrough of what a student
// (and a faculty member) encounters in Applied Teaming.
export default defineConfig({
  base: process.env.DOCS_BASE || "/",
  title: "Applied Teaming",
  description: "A step-by-step walkthrough of the student experience, for faculty.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: "For your students", link: "/for-your-students" },
      { text: "Guide", link: "/getting-started/sign-up" },
      { text: "A team course", link: "/course/overview" },
      { text: "For faculty", link: "/faculty/overview" },
    ],

    sidebar: [
      {
        text: "Start here",
        items: [
          { text: "What is Applied Teaming?", link: "/" },
          { text: "Getting your students started", link: "/for-your-students" },
        ],
      },
      {
        text: "Getting started",
        collapsed: false,
        items: [
          { text: "1 · Sign up & sign in", link: "/getting-started/sign-up" },
          { text: "2 · First-run onboarding", link: "/getting-started/onboarding" },
          { text: "3 · Joining a class", link: "/getting-started/joining-a-class" },
        ],
      },
      {
        text: "Your living profile",
        collapsed: false,
        items: [
          { text: "The profile map", link: "/profile/the-map" },
          { text: "Adding to your map", link: "/profile/adding" },
          { text: "Style surveys", link: "/profile/style" },
        ],
      },
      {
        text: "A team course, start to finish",
        collapsed: false,
        items: [
          { text: "Overview", link: "/course/overview" },
          { text: "Welcome & sharing stories", link: "/course/welcome" },
          { text: "The dashboard", link: "/course/dashboard" },
          { text: "A checkpoint check-in", link: "/course/checkpoint" },
          { text: "Class view", link: "/course/class-view" },
          { text: "Team view", link: "/course/team-view" },
          { text: "Personal view", link: "/course/personal-view" },
          { text: "Artifacts & unlocks", link: "/course/artifacts" },
          { text: "Finishing the course", link: "/course/finishing" },
        ],
      },
      {
        text: "Explore & insights",
        collapsed: false,
        items: [
          { text: "Explore alumni paths", link: "/explore/alumni" },
          { text: "Insights", link: "/explore/insights" },
          { text: "Settings", link: "/explore/settings" },
        ],
      },
      {
        text: "For faculty",
        collapsed: false,
        items: [
          { text: "Overview", link: "/faculty/overview" },
          { text: "Claim & set up a course", link: "/faculty/setup" },
          { text: "The cohort dashboard", link: "/faculty/dashboard" },
        ],
      },
    ],

    outline: { level: [2, 3], label: "On this page" },
    docFooter: { prev: true, next: true },
    search: { provider: "local" },
  },
});
