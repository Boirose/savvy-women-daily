export default function PrivacyPolicy() {
  return (
    <div style={{maxWidth:"760px",margin:"0 auto",padding:"4rem 1rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"#111827",marginBottom:"0.5rem"}}>Privacy Policy</h1>
      <p style={{color:"#9ca3af",fontSize:"14px",marginBottom:"2rem"}}>Last updated: June 2026</p>

      {[
        {title:"Information We Collect",content:"We collect information you voluntarily provide such as your email address when you subscribe to our newsletter. We also collect standard analytics data including pages visited, time on site, and general location data through Google Analytics."},
        {title:"How We Use Your Information",content:"Your email address is used only to send you the newsletter you subscribed to. We do not sell, rent, or share your personal information with third parties for their marketing purposes."},
        {title:"Cookies",content:"This site uses cookies to analyze traffic and improve your experience. By using this site you consent to our use of cookies. You can disable cookies in your browser settings at any time."},
        {title:"Affiliate Links",content:"This site contains affiliate links. When you click an affiliate link and make a purchase, we earn a small commission at no extra cost to you. We only recommend products we genuinely believe in and have researched."},
        {title:"Google AdSense",content:"We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting Google Ad Settings."},
        {title:"Third Party Services",content:"We use Beehiiv for email newsletters, Google Analytics for traffic analysis, and Vercel for hosting. Each of these services has their own privacy policies which govern their use of your data."},
        {title:"Your Rights",content:"You may unsubscribe from our newsletter at any time using the unsubscribe link in any email. You may also request deletion of your data by contacting us at hello@savvywomendaily.com."},
        {title:"Contact",content:"For any privacy-related questions contact us at hello@savvywomendaily.com"}
      ].map(s=>(
        <div key={s.title} style={{marginBottom:"1.5rem",paddingBottom:"1.5rem",borderBottom:"0.5px solid #e5e7eb"}}>
          <h2 style={{fontSize:"1.1rem",fontWeight:"bold",color:"#1A0A2E",marginBottom:"0.5rem"}}>{s.title}</h2>
          <p style={{color:"#4b5563",lineHeight:"1.8",margin:0,fontSize:"15px"}}>{s.content}</p>
        </div>
      ))}
    </div>
  );
}