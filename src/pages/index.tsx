import DataList from "@/Components/DataList/DataList";
import MainLayout from "@/Components/shared/MainLayout/MainLayout";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <div className="w-screen h-screen">
        <div className="flex justify-center mt-14">
          <DataList />
        </div>
      </div>
    </MainLayout>
  );
}
