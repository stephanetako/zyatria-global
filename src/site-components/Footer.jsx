"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Grid from "./webflow_modules/Layout/components/Grid";
import Link from "./webflow_modules/Basic/components/Link";
import List from "./webflow_modules/Basic/components/List";
import ListItem from "./webflow_modules/Basic/components/ListItem";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";

export function Footer({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section className={"footer is-inverse"} tag={"footer"}>
        <Block className={"container"} tag={"div"}>
          <Grid className={"grid_2-col margin-bottom_large"}>
            <List
              className={"margin-bottom_none"}
              id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb520-7f1681b9"}
              // @ts-ignore - User-defined custom attribute(s)
              role={"list"}
              tag={"ul"}
              unstyled={true}
            >
              <ListItem>
                <Link
                  block={"inline"}
                  button={false}
                  className={"footer_link on-inverse"}
                  options={{
                    href: "#",
                  }}
                >
                  <Block className={"paragraph_xxlarge"} tag={"div"}>
                    {"Accueil"}
                  </Block>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  block={"inline"}
                  button={false}
                  className={"footer_link on-inverse"}
                  options={{
                    href: "#",
                  }}
                >
                  <Block className={"paragraph_xxlarge"} tag={"div"}>
                    {"Services"}
                  </Block>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  block={"inline"}
                  button={false}
                  className={"footer_link on-inverse"}
                  options={{
                    href: "#",
                  }}
                >
                  <Block className={"paragraph_xxlarge"} tag={"div"}>
                    {"Solutions"}
                  </Block>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  block={"inline"}
                  button={false}
                  className={"footer_link on-inverse"}
                  options={{
                    href: "#",
                  }}
                >
                  <Block className={"paragraph_xxlarge"} tag={"div"}>
                    {"Tarifs"}
                  </Block>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  block={"inline"}
                  button={false}
                  className={"footer_link on-inverse"}
                  options={{
                    href: "#",
                  }}
                >
                  <Block className={"paragraph_xxlarge"} tag={"div"}>
                    {"Contact"}
                  </Block>
                </Link>
              </ListItem>
            </List>
            <Block
              className={
                "ix-link-wrapper w-node-ec77773e-dad7-1c35-0b67-43407c8cb527-7f1681b9"
              }
              id={"w-node-e2ffbe59-3582-a8c3-0ac3-a07b99dc51e1-89bb09b6"}
              tag={"div"}
            >
              <Link
                block={"inline"}
                button={false}
                className={"logo-link"}
                id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb526-7f1681b9"}
                options={{
                  href: "#",
                }}
              >
                <Block className={"nav_logo-icon"} tag={"div"}>
                  <DOM
                    height={"100%"}
                    preserveAspectRatio={"xMidYMid meet"}
                    tag={"svg"}
                    viewBox={"0 0 33 33"}
                    width={"100%"}
                  >
                    <DOM
                      d={
                        "M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                      }
                      fill={"currentColor"}
                      tag={"path"}
                    />
                  </DOM>
                </Block>
                <Block
                  className={
                    "paragraph_xlarge margin-bottom_none text_all-caps"
                  }
                  data-brand-name={"true"}
                  tag={"div"}
                >
                  {"ZyatrIA Global"}
                </Block>
              </Link>
            </Block>
          </Grid>
          <Grid className={"footer_bottom"}>
            <Block tag={"div"}>
              <Paragraph className={"text-color_secondary"}>
                {"Propuls"}
                {"é"}
                {" par Webflow"}
              </Paragraph>
            </Block>
            <Block
              className={"margin-left_auto"}
              id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb550-7f1681b9"}
              tag={"div"}
            >
              <List
                aria-label={"Social media links"}
                className={"footer_icon-group margin_top-auto"}
                id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb54f-7f1681b9"}
                // @ts-ignore - User-defined custom attribute(s)
                role={"list"}
                tag={"ul"}
                unstyled={true}
              >
                <ListItem className={"margin-bottom_none"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"footer_icon-link"}
                    options={{
                      href: "#",
                    }}
                  >
                    <DOM
                      height={"100%"}
                      tag={"svg"}
                      viewBox={"0 0 16 16"}
                      width={"100%"}
                    >
                      <DOM
                        d={
                          "M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z"
                        }
                        fill={"currentColor"}
                        tag={"path"}
                      />
                    </DOM>
                    <Block className={"screen-reader"} tag={"div"}>
                      {"Facebook"}
                    </Block>
                  </Link>
                </ListItem>
                <ListItem className={"margin-bottom_none"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"footer_icon-link"}
                    options={{
                      href: "#",
                    }}
                  >
                    <DOM
                      height={"100%"}
                      tag={"svg"}
                      viewBox={"0 0 16 16"}
                      width={"100%"}
                    >
                      <DOM
                        d={
                          "M8,1.441c2.136,0,2.389.009,3.233.047a4.419,4.419,0,0,1,1.485.276,2.472,2.472,0,0,1,.92.6,2.472,2.472,0,0,1,.6.92,4.419,4.419,0,0,1,.276,1.485c.038.844.047,1.1.047,3.233s-.009,2.389-.047,3.233a4.419,4.419,0,0,1-.276,1.485,2.644,2.644,0,0,1-1.518,1.518,4.419,4.419,0,0,1-1.485.276c-.844.038-1.1.047-3.233.047s-2.389-.009-3.233-.047a4.419,4.419,0,0,1-1.485-.276,2.472,2.472,0,0,1-.92-.6,2.472,2.472,0,0,1-.6-.92,4.419,4.419,0,0,1-.276-1.485c-.038-.844-.047-1.1-.047-3.233s.009-2.389.047-3.233a4.419,4.419,0,0,1,.276-1.485,2.472,2.472,0,0,1,.6-.92,2.472,2.472,0,0,1,.92-.6,4.419,4.419,0,0,1,1.485-.276c.844-.038,1.1-.047,3.233-.047M8,0C5.827,0,5.555.009,4.7.048A5.868,5.868,0,0,0,2.76.42a3.908,3.908,0,0,0-1.417.923A3.908,3.908,0,0,0,.42,2.76,5.868,5.868,0,0,0,.048,4.7C.009,5.555,0,5.827,0,8s.009,2.445.048,3.3A5.868,5.868,0,0,0,.42,13.24a3.908,3.908,0,0,0,.923,1.417,3.908,3.908,0,0,0,1.417.923,5.868,5.868,0,0,0,1.942.372C5.555,15.991,5.827,16,8,16s2.445-.009,3.3-.048a5.868,5.868,0,0,0,1.942-.372,4.094,4.094,0,0,0,2.34-2.34,5.868,5.868,0,0,0,.372-1.942c.039-.853.048-1.125.048-3.3s-.009-2.445-.048-3.3A5.868,5.868,0,0,0,15.58,2.76a3.908,3.908,0,0,0-.923-1.417A3.908,3.908,0,0,0,13.24.42,5.868,5.868,0,0,0,11.3.048C10.445.009,10.173,0,8,0Z"
                        }
                        fill={"currentColor"}
                        tag={"path"}
                      />
                      <DOM
                        d={
                          "M8,3.892A4.108,4.108,0,1,0,12.108,8,4.108,4.108,0,0,0,8,3.892Zm0,6.775A2.667,2.667,0,1,1,10.667,8,2.667,2.667,0,0,1,8,10.667Z"
                        }
                        fill={"currentColor"}
                        tag={"path"}
                      />
                      <DOM
                        cx={"12.27"}
                        cy={"3.73"}
                        fill={"currentColor"}
                        r={"0.96"}
                        tag={"circle"}
                      />
                    </DOM>
                    <Block className={"screen-reader"} tag={"div"}>
                      {"Instagram"}
                      <br />
                    </Block>
                  </Link>
                </ListItem>
                <ListItem className={"margin-bottom_none"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"footer_icon-link"}
                    options={{
                      href: "#",
                    }}
                  >
                    <DOM
                      height={"100%"}
                      tag={"svg"}
                      viewBox={"0 0 16 16"}
                      width={"100%"}
                    >
                      <DOM
                        d={
                          "M12.3723 1.16992H14.6895L9.6272 6.95576L15.5825 14.829H10.9196L7.26734 10.0539L3.08837 14.829H0.769833L6.18442 8.64037L0.471436 1.16992H5.2528L8.55409 5.53451L12.3723 1.16992ZM11.5591 13.4421H12.843L4.55514 2.48399H3.17733L11.5591 13.4421Z"
                        }
                        fill={"currentColor"}
                        tag={"path"}
                      />
                    </DOM>
                    <Block className={"screen-reader"} tag={"div"}>
                      {"X"}
                    </Block>
                  </Link>
                </ListItem>
                <ListItem className={"margin-bottom_none"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"footer_icon-link"}
                    options={{
                      href: "#",
                    }}
                  >
                    <DOM
                      height={"100%"}
                      tag={"svg"}
                      viewBox={"0 0 16 16"}
                      width={"100%"}
                    >
                      <DOM
                        d={
                          "M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7 C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6z M3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C4.9,4.3,4.3,5,3.6,5z M13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2 c2.4,0,2.8,1.6,2.8,3.6V13.6z"
                        }
                        fill={"currentColor"}
                        tag={"path"}
                      />
                    </DOM>
                    <Block className={"screen-reader"} tag={"div"}>
                      {"LinkedIn"}
                    </Block>
                  </Link>
                </ListItem>
                <ListItem className={"margin-bottom_none"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"footer_icon-link"}
                    options={{
                      href: "#",
                    }}
                  >
                    <DOM
                      height={"100%"}
                      tag={"svg"}
                      viewBox={"0 0 16 16"}
                      width={"100%"}
                    >
                      <DOM
                        d={
                          "M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"
                        }
                        fill={"currentColor"}
                        tag={"path"}
                      />
                    </DOM>
                    <Block className={"screen-reader"} tag={"div"}>
                      {"YouTube"}
                    </Block>
                  </Link>
                </ListItem>
              </List>
            </Block>
          </Grid>
          <Block
            className={"divider margin-bottom_small margin-top_small"}
            tag={"div"}
          />
          <Block className={"footer_bottom"} tag={"div"}>
            <Block className={"text-color_secondary"} tag={"div"}>
              {"Tous droits r"}
              {"é"}
              {"serv"}
              {"é"}
              {"s "}
              {"©"}
              {" 2025"}
            </Block>
            <Block className={"text-color_secondary"} tag={"div"}>
              {"Con"}
              {"ç"}
              {"u par Taylor Durand"}
            </Block>
          </Block>
        </Block>
      </Section>
    </div>
  );
}
