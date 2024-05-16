"use client"
import Card from "@/components/card/person.card"
import {NavigationBottom} from "@/components/navbar/navigation.bottom"
import Hero from "@/components/section/heroSearch"

export default async function IndexPage() {
  return (
    <div >
    <Hero/>
    <Card/>
    <NavigationBottom/>
    </div>
);
}