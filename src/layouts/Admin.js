import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboard.js";
const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
};
const queryClient = new QueryClient(queryClientConfig);
export default function Admin() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        {/*<Sidebar />*/}
        <div className="relative bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24 container">
            <Dashboard />
            <FooterAdmin />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}
