"use client"
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return router.push("/home")
}

export default Page;