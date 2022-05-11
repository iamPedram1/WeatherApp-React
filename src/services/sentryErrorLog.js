import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export default Sentry.init({
  dsn: "https://18e4b1ddbeaf4ceba5abc0ba77556605@o1238652.ingest.sentry.io/6392000",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
