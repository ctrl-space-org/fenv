import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/2"],
});

//app: () => System.import("@ctrl-space-org/ex-app"),
registerApplication({
  name: "@ctrl-space-org/ex-app",
  app: () => System.import("http://localhost:3000/ctrl-space-org-ex-app.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@ctrl-space-org/ex-appv2",
  app: () => System.import("http://localhost:8080/ctrl-space-org-ex-app.js"),
  activeWhen: ["/v2"],
});

start({
  urlRerouteOnly: true,
});
