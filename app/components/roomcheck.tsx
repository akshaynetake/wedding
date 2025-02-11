"use client";

import React, { useEffect, useMemo } from "react";
import Papa from "papaparse";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import clsx from "clsx";

const RoomCheck: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [selected, setSelected] = React.useState(null);
  const [query, setQuery] = React.useState<string>("");

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/rooms.csv");
      const text = await res.text();
      const data: any = Papa.parse(text, { header: true });
      setData(data.data);
      setSelected(data.data[0]["Person Name"]);
    };
    fetchFiles();
  }, []);

  const filteredPeople = useMemo(() => {
    if (!query) return data;
    return data.filter((person) =>
      person["Person Name"].toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  const currentPerson = useMemo(() => {
    return data.find((person) => person["Person Name"] === selected);
  }, [selected, data]);

  return (
    <section className="flex items-center justify-center mt-20 flex-col">
      <p className="text-2xl font-display font-bold text-pink-900">
        See where are you are staying
      </p>
      <div className="mt-6">
        <Combobox
          value={selected}
          onChange={(value) => setSelected(value)}
          onClose={() => setQuery("")}
        >
          <div className="relative">
            <ComboboxInput
              className={clsx(
                "w-full rounded-lg border-none py-1.5 pr-8 pl-3 text-xl font-main",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              displayValue={(person: any) => {
                return person || "";
              }}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <ChevronDownIcon className="size-4" />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor="bottom"
            transition
            className={clsx(
              "w-[var(--input-width)] rounded-xl border  p-1 [--anchor-gap:var(--spacing-1)] bg-pink-200 max-h-[400px] overflow-hidden",
              "transition duration-100 ease-in "
            )}
          >
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person["Person Name"]}
                value={person["Person Name"]}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-blue-100"
              >
                <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                <div className="text-sm/6 ">{person["Person Name"]}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
      <div>
        {selected && (
          <div className="p-8">
            <div>
              <p className="text-sm font-main">Name</p>
              <p className="text-4xl font-display">
                {currentPerson["Person Name"]}
              </p>
            </div>
            <div>
              <p className="text-sm font-main">Hotel Name</p>
              <p className="text-4xl font-display">
                {currentPerson["Hotel Name"]}
              </p>
            </div>
            <div className="mt-6 items-center gap-4">
              <p className="text-sm font-main">Room Number</p>
              <p className="text-4xl font-display">
                {currentPerson["Room Number"]}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomCheck;
