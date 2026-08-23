import React from 'react'
import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
    {
      id: 1,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOvp6MXrCUMD7_9x01HieBQHFLPePd8uRokw53_eEcw3O0nXlHEfB1H6&s=10",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Islamabad"
    },
    {
      id: 2,
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Abbottabad"
    },
    {
      id: 3,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZKPlCCc9qrsWdDaKQDrzQ1rV4fzMZAHbhjB7AlPp8w&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Nowshera"
    },
    {
      id: 4,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwpap5kCE5plP4ysJ21Uo7CWrtIOuiP45Ab8X5MeB3NqAwyIHgo9pwdw&s=10",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Islamabad"
    },
    {
      id: 5,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDrhtdkX1rxR2znbBPGCjzddg8PT3OoYbcJQBdpuZeA&s",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "Backend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Abbottabad"
    },
    {
      id: 6,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEc8JGROHsM3TawP59txb79S-tMFkdpJjH9AnR2-a-A&s",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Islamabad"
    },
    {
      id: 7,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i07chPl0zWX3A_ksB_51jaMHJ2fCv5fP9FnhuXZBmg&s",
      companyName: "NVIDIA",
      datePosted: "1 day ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Nowshera"
    },
    {
      id: 8,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNy-y3ZGWSCuhLr4J3Pp7MMJ4gWFzYQcp4mAM9TW7GQ&s",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Abbottabad"
    },
    {
      id: 9,
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small/uber-transparent-icon-free-png.png",
      companyName: "Uber",
      datePosted: "3 days ago",
      post: "Mobile App Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Islamabad"
    },
    {
      id: 10,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpEGeu9GgB8BuAty_4PJylmNNJdNRnLIY899FGDX2RiiLkiY8OUb3FYTR&s=10",
      companyName: "OpenAI",
      datePosted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Islamabad"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key = {idx}>
           <Card company={elem.companyName} post = {elem.post} tag1 = {elem.tag1} tag2 ={elem.tag2} brandLogo = {elem.brandLogo} pay = {elem.pay} datePosted = {elem.datePosted}/>
        </div>
      })}
    </div>
  )
}

export default App
