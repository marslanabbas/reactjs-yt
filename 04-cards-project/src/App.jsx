
import Card from './components/Card'


const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 55,
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
    companyName: "Apple",
    datePosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 60,
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZPJAE0dqPukUcuiRdQe0U0oNM6IM7B_ZSA&s",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 75,
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://www.citypng.com/public/uploads/preview/round-official-amazon-a-letter-symbol-logo-icon-701751694791936ocsmsimccw.png",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 50,
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 80,
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 65,
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxreZ7g0vLre-01lkZ5Wl4fhGYBkN9FBHbg&s",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 85,
    location: "Palo Alto, CA"
  },
  {
    brandLogo: "https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.1070.png/1703060329053/nvidia-logo-vert.png",
    companyName: "NVIDIA",
    datePosted: "5 days ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 90,
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI0-AaIAcwVCkcnR8xdetso-wz9rCOVJB5Q&s",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Mobile App Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 45,
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsGblwnIE5Zz0_myRIwwQPiMkYzugPLbw8Q&s",
    companyName: "Airbnb",
    datePosted: "3 days ago",
    post: "Product Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 70,
    location: "San Francisco, CA"
  }
];
console.log(jobOpenings);

  return (
    <div className="parent">
    {jobOpenings.map(function(elem,idx){
      
      return 
      <div key={idx}>
      <Card  company = {elem.companyName} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} brandLogo = {elem.brandLogo} datePosted = {elem.datePosted}/>
      </div>
    })}
    
    </div>
  )
}

export default App