"use client"
import React, { useState, useEffect } from "react";
import GuidesList from "@/app/(light-pages)/guides/ui/guides";
import { Api } from "@/api";
import { IGuideItem } from "@/api/types";

const Guides = () => {
  const [guides, setGuides] = useState<null | IGuideItem[]>(null);

  useEffect(() => {
    getMockGuideData();
  }, [])

  const getMockGuideData = async () => {
    const items = await Api.getGuideData();
    setGuides(items)
  }

  return (
    <div className="pt-40">
      <GuidesList items={guides} />
    </div>
  )
}

export default Guides;