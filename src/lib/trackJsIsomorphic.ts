import { TrackJS } from 'trackjs';
// import trackJSNode from 'trackjs-node';

// const trackJs = typeof window !== 'undefined' ? trackJS.TrackJS : trackJSNode.TrackJS;

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: '0377457a8a0c41c2a11da5e34f786bba',
    application: 'react-shopping-cart',
    onError: payload => {
      if (payload.entry === 'ajax') {
        if (Array.isArray(payload.network)) {
          const latestRequest = payload.network[payload.network.length - 1];
          return !(latestRequest && typeof latestRequest.statusCode === 'number' && latestRequest.statusCode < 500);
        }
        return true;
      // } else if (payload.message.startsWith('Failed to register a ServiceWorker')) {
        // return false;
      }
      return true;
    },
  });
}

export default TrackJS;
