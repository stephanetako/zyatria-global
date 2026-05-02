"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Section from "./webflow_modules/Layout/components/Section";

export function ServicesHeroSection({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section tag={"header"}>
        <Block className={"container"} tag={"div"} />
      </Section>
    </div>
  );
}
