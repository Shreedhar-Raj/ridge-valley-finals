import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNavbar from '@/components/TopNav';
import LongCard from '@/components/LongCard';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { SupervisedUserCircle } from '@mui/icons-material';
const YourPage = () => {
  const [articles_, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const userInterests = 'https://feeds.feedburner.com/gadgets360-latest'; 
        const response = await fetch(`/api/getNews?userInterests=${userInterests}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };


  }, []);

    const articles =[
  {
    link: 'https://www.techtarget.com/searchcio/definition/blockchain',
    title: 'TechTarget - What is blockchain?'
  },
  {
    link: 'https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-blockchain',
    title: 'McKinsey - What is blockchain?'
  },
  {
    link: 'https://builtin.com/blockchain',
    title: 'Built In - Blockchain'
  },
  {
    link: 'https://www.synopsys.com/glossary/what-is-blockchain.html',
    title: 'Synopsys - What is blockchain?'
  },
  {
    link: 'https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology',
    title: 'Simplilearn - Blockchain Technology Tutorial'
  },
  {
    link: 'https://aws.amazon.com/what-is/blockchain/?aws-products-all.sort-by=item.additionalFields.productNameLowercase&aws-products-all.sort-order=asc',
    title: 'AWS - What is blockchain?'
  },
  {
    link: 'https://www.ibm.com/topics/blockchain',
    title: 'IBM - Blockchain'
  },
  {
    link: 'https://www.blockchain.com/',
    title: 'Blockchain.com'
  },
  {
    link: 'https://www.investopedia.com/terms/b/blockchain.asp',
    title: 'Investopedia - Blockchain'
  },
  {
    link: 'https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain',
    title: 'Coinbase - What is a blockchain?'
  }
];

   const page = {
    page: "Dashboard",
  }
  const notifications = {
    title: "Not Enough Data",
    description: "You must have a minimum presence of 14 days on our platoform before you can request for this data.",
    component: <RemoveCircleIcon className='text-5xl text-[#197878]' />
  }
const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Notifications", src: "Chat" },
    { title: "Learning Paths", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "AI Learning", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Notes ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full relative h-screen '>
        <div className=' w-full relative h-screen '>
        <TopNavbar data={page} />
        <div className='flex'>
        <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '>Top {articles.length} News Articles from Times Now</h1>
      <ul className='ml-5'>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} className='bg-yellow-300 underline'>{index+1}.   {article.title}</a>
          </li>
        ))}
      </ul>
      

    </div>
    <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '>Top {articles.length} Tasks for The Day</h1>
      <ul className='ml-5'>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} className='text-[#197878] underline'>{index+1}.   {article.title}</a>
          </li>
        ))}
      </ul>
      
        </div>
        <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '> {articles.length} Exams are Scheduled this Week</h1>
      <ul className='ml-5'>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} className='text-[#197878] underline'>{index+1}.   {article.title}</a>
          </li>
        ))}
      </ul>
      
        </div>
    </div>
    <div className='flex'>
        <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '>Productivity Analysis</h1>
      <ul className='ml-5'>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} className='text-[#197878] underline'>{index+1}.   {article.title}</a>
          </li>
        ))}
      </ul>
      

    </div>
    <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '>{articles.length} Assignments Due Today</h1>
      <ul className='ml-5'>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} className='text-[#197878] underline'>{index+1}.   {article.title}</a>
          </li>
        ))}
      </ul>
      
        </div>
        <div className='p-7 m-7 border border-[#197878] w-fit pr-6 rounded-lg shadow-lg  '>
      <h1 className='text-xl font-bold mb-7 '>{articles.length} Competetions This Week</h1>
      <ul className='ml-5'>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} className='text-[#197878] underline'>{index+1}.   {article.title}</a>
          </li>
        ))}
      </ul>
      
        </div>
    </div>
      </div>
      </div>
    
    
    </div>
  );
};

export default YourPage;
