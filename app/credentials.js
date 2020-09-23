module.exports = {

	// Edit "rpc" below to target your node.
	// You may delete this section if you wish to connect manually via the UI.

	rpc: {
		host: process.env.BTC_RPC_HOST,
		port: parseInt(process.env.BTC_RPC_PORT),
		username: process.env.BTC_RPC_USER,
		password: process.env.BTC_RPC_PASSWORD
	},

	// optional: enter your api access key from ipstack.com below
	// to include a map of the estimated locations of your node's
	// peers
	ipStackComApiAccessKey: "",

	// optional: GA tracking code
	googleAnalyticsTrackingId: "",

	// optional: sentry.io error-tracking url
	sentryUrl: "",
};
