import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  id: string;
}

export const Bing: FC<Props> = ({ id }) => (
  <Script id="bing-uet" dangerouslySetInnerHTML={{ __html: getScript(id) }} />
);

const getScript = (id: string): string => `
(function(w,d,t,r,u) {
  var f,n,i;
  w[u]=w[u]||[],f=function() {
    var o={ti:\`${id.replace(/`/ug, '\\`')}\`, enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
  },
  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
  },
  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
})(window,document,"script","//bat.bing.com/bat.js","uetq");
`;
