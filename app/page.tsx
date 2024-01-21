
import { ElementType } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { SiExpensify } from "react-icons/si";
import { IoPersonAddSharp } from "react-icons/io5";
import { TbReportMoney } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import Link from "next/link";


interface CardProps {
  Icons: ElementType;
  title: string;
  description: string;
  buttonText: string;
  href?:string;
}


const Card: React.FC<CardProps> = ({ Icons, title, description, buttonText, href='/' }) => (
  <div className=" border-red-500 border-2 w-1/4 p-5 card card-compact max-h-96 bg-base-100 shadow-lg rounded-lg bg-sky-50 hover:bg-blue-100 transition-colors duration-200">
  <figure className=" text-6xl items-center justify-center rounded-sm"><Icons/></figure>
  <div className="card-body">
    <div className="card-title font-bold items-center">{title}</div>
    <h2 className=" font-mono">{description}</h2>
    <div className="flex justify-end card-actions">
    <Link href={href}>
          <button className="bg-teal-500 font-bold text-white">{buttonText}</button>
        </Link>
      </div>
  </div>
</div>


);

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center space-x-2 space-y-2">
      <Card 
        Icons={FcSalesPerformance}
        title={"Sales"}
        description={"Discover the performance of your Weekly, Montly and Annual Sales"}
        buttonText={"View"}
        href="/Sales"
      />

      <Card 
        Icons={SiExpensify}
        title={"Expenses"}
        description={"Manage all your Expenses here"}
        buttonText={"View"}
        href="/Expenses"
      />
      <Card 
        Icons={IoPersonAddSharp}
        title={"Employees"}
        description={"Manage all Employees"}
        buttonText={"View"}
        href="/Employees"
      />
      <Card 
        Icons={TbReportMoney}
        title={"Reports"}
        description={"View reports on your Weekly, Montly and Annual Sales"}
        buttonText={"View"}
        href="/Reports"
      />
      <Card 
        Icons={MdManageAccounts}
        title={"Accounts"}
        description={"Manage, Edit and Add Accounts"}
        buttonText={"View"}
        href="/Accounts"
      />
    </div>
  );
}

