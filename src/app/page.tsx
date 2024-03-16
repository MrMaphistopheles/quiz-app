"use client";
import Image from "next/image";
import data from "../../public/technologys.json";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Option from "./_components/Option";

export default function Home() {
  const [techSet, setTechSet] = useState<string[]>([]);

  console.log(techSet);

  const selectHandler = (name: string) => {
    setTechSet((prev) => {
      if (prev.includes(name)) {
        return prev.filter((i) => i !== name);
      }
      return [...prev, name];
    });
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-2 py-4">
      <div className="flex h-1/6 w-full items-center justify-center ">
        <p className="text-2xl font-light">Select topics for quiz</p>
      </div>
      {data.map((i) => (
        <Option
          key={i.name}
          onClick={() => selectHandler(i.name)}
          style={
            techSet.includes(i.name)
              ? {
                  backgroundColor: "black",
                  color: "white",
                }
              : {}
          }
        >
          <div>
            <Image src={i.image} width={30} height={30} alt="technology icon" />
          </div>
          <p>{i.name}</p>
        </Option>
      ))}
      <div className="flex h-1/6 w-full items-center justify-center ">
        <Button size="lg" className="bg-black text-white">
          Start test
        </Button>
      </div>
    </div>
  );
}
