window.BrevoConversationsGroupID = 'AuwmFhraav7jYRZPf';
(function(d, w, c) {
  w.BrevoConversationsID = '6655fdf6d3e7b7294964b877';
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
  var s = d.createElement('script');
  s.async = true;
  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');
BrevoConversations('setColors', {
  buttonText: '#f5f5f5', /* chat button text/icon color */
  buttonBg: '#0013de', /* chat button background color */
  visitorBubbleBg: '#0013de', /* visitor's message bubble color */
  agentBubbleBg: '#ddd', /* agent's message bubble color */
});
BrevoConversations('updateIntegrationData', {
  school: 'QC Design School',
});
