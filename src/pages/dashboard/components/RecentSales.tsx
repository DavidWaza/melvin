import { Avatar, AvatarFallback, AvatarImage } from "@/component/ui/avatar";
import { Text } from "@/src/component/Typhography/Typography";

const recentSalesCustomers = [
  {
    avatar: "OM",
    name: "Olivia Martin",
    date: "2 Oct, 2023",
    amount: "+ $1,999.00",
  },
  {
    avatar: "OM",
    name: "Olivia Martin",
    date: "2 Oct, 2023",
    amount: "+ $1,999.00",
  },
  {
    avatar: "OM",
    name: "Olivia Martin",
    date: "2 Oct, 2023",
    amount: "+ $1,999.00",
  },
  {
    avatar: "OM",
    name: "Olivia Martin",
    date: "2 Oct, 2023",
    amount: "+ $1,999.00",
  },
  {
    avatar: "OM",
    name: "Olivia Martin",
    date: "2 Oct, 2023",
    amount: "+ $1,999.00",
  },
];
const RecentSales = () => {
  return (
    <>
      <div className="bg-[#181818] text-white p-5 text-lg text-center lg:text-left">Transaction History</div>
    <div className="space-y-8 text-white">
      {recentSalesCustomers.map(({ avatar, name, date, amount }, index) => (
        <div
          key={index}
          className="flex items-center border-b border-slate-600 w-full py-10"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 ">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <div className="ml-auto font-medium">{amount}</div>
        </div>
      ))}
    </div>
    </>
  
  );
};
export default RecentSales;
