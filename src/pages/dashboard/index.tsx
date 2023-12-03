import React from "react";
import Header from "./components/Header";
import Combobox from "./components/Combobox";
import Navbar from "./components/Navbar";
import LocalAvatar from "./components/Avatar";
import UserNav from "./components/UserNav";
import RecentSales from "./components/RecentSales";
import Overview from "./components/Overview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/ui/tabs";
import { Text } from "@/src/component/Typhography/Typography";
import MoneyTransfer from "./components/MoneyTransfer";
import CashAvailable from "./components/CashAvailable";
import QuickAccess from "./components/QuickAccess";

const individualTabs = [
  {
    label: "spend",
  },
  {
    label: "save",
  },
  {
    label: "borrow",
  },
  {
    label: "invest",
  },
];
const Dashboard = () => {
  return (
    <div className="bg-[#0D0D0D] h-full">
      <Header>
        {/* <Navbar /> */}
        <UserNav />
      </Header>
      <Tabs defaultValue="overview" className="space-y-4 my-10 lg:px-10 px-3">
        <TabsList>
          {individualTabs.map((tabs) => (
            <TabsTrigger value="overview" key={tabs.label}>
              <Text
                variant="extrasmall"
                className="text-white bg-slate-900 hover:bg-slate-800 p-2 rounded-lg capitalize w-full"
              >
                {tabs.label}
              </Text>
            </TabsTrigger>
          ))}
        </TabsList>
        <section>
          <div className="lg:flex justify-between p-5">
            <CashAvailable />
            <div className="flex gap-3 my-5">
              <MoneyTransfer imgSrc="up.svg" label="Transfer" />
              <MoneyTransfer imgSrc="add.svg" label="Add Money" />
            </div>
          </div>
          <section>
            <div className="px-5 py-7">
              <QuickAccess />
              {/* <QuickAccess /> */}
            </div>
          </section>
          <section className="my-10 px-5">
            <RecentSales />
          </section>
        </section>
      </Tabs>
    </div>
  );
};
export default Dashboard;
