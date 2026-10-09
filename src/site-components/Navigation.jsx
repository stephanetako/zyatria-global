"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import DropdownList from "./webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "./webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "./webflow_modules/Dropdown/components/DropdownWrapper";
import Grid from "./webflow_modules/Layout/components/Grid";
import Icon from "./webflow_modules/Icon/components/Icon";
import Link from "./webflow_modules/Basic/components/Link";
import List from "./webflow_modules/Basic/components/List";
import ListItem from "./webflow_modules/Basic/components/ListItem";
import NavbarButton from "./webflow_modules/Navbar/components/NavbarButton";
import NavbarMenu from "./webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "./webflow_modules/Navbar/components/NavbarWrapper";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Strong from "./webflow_modules/Basic/components/Strong";

export function Navigation({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"nav is-inverse"} tag={"div"}>
        <NavbarWrapper
          className={"nav_container"}
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: true,
            animation: "default",
            collapse: "medium",
          }}
          data-animation={"default"}
          data-collapse={"medium"}
          data-duration={"400"}
          data-easing={"ease"}
          data-easing2={"ease"}
          data-no-scroll={"1"}
          // @ts-ignore - User-defined custom attribute(s)
          role={"banner"}
          tag={"div"}
        >
          <Block
            className={"nav_left"}
            id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb423-7f1681b8"}
            tag={"div"}
          >
            <Link
              block={"inline"}
              button={false}
              className={"nav_logo"}
              id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb422-7f1681b8"}
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
                className={"paragraph_large margin-bottom_none"}
                data-brand-name={"true"}
                tag={"div"}
              >
                {"ZyatrIA Global"}
              </Block>
            </Link>
          </Block>
          <Block
            className={"nav_right"}
            id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb502-7f1681b8"}
            tag={"div"}
          >
            <NavbarMenu
              className={"nav_menu"}
              id={"w-node-ec77773e-dad7-1c35-0b67-43407c8cb4fd-7f1681b8"}
              role={"navigation"}
              tag={"nav"}
            >
              <List
                className={"nav_menu-list"}
                // @ts-ignore - User-defined custom attribute(s)
                role={"list"}
                tag={"ul"}
                unstyled={true}
              >
                <ListItem className={"nav_menu-list-item"}>
                  <DropdownWrapper
                    className={"nav_dropdown-menu"}
                    delay={0}
                    hover={false}
                    tag={"div"}
                  >
                    <DropdownToggle
                      className={"nav_link on-inverse"}
                      tag={"div"}
                    >
                      <Block tag={"div"}>{"Solutions"}</Block>
                      <Icon
                        className={"nav_caret"}
                        widget={{
                          type: "icon",
                          icon: "dropdown-toggle",
                        }}
                      />
                    </DropdownToggle>
                    <DropdownList
                      className={"mega-nav_dropdown-list"}
                      tag={"nav"}
                    >
                      <Block
                        className={"mega-nav_dropdown-list-wrapper"}
                        tag={"div"}
                      >
                        <List
                          className={
                            "grid_3-col tablet-1-col-1 gap-medium margin-bottom_none"
                          }
                          // @ts-ignore - User-defined custom attribute(s)
                          role={"list"}
                          tag={"ul"}
                          unstyled={true}
                        >
                          <ListItem
                            className={
                              "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4bf-7f1681b8"
                            }
                            id={
                              "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e6d-ad6d2e56"
                            }
                          >
                            <Grid
                              className={"grid_3-col tablet-1-col-1 gap-small"}
                            >
                              <Block tag={"div"}>
                                <Block className={"eyebrow"} tag={"div"}>
                                  {"Automatisation IA"}
                                </Block>
                                <List
                                  className={"mega-nav_list"}
                                  // @ts-ignore - User-defined custom attribute(s)
                                  role={"list"}
                                  tag={"ul"}
                                  unstyled={true}
                                >
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb43c-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb43a-7f1681b8"
                                        }
                                        id={
                                          "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e78-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>{"Agents sur mesure"}</Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {"D"}
                                          {"é"}
                                          {"ployez des agents IA adapt"}
                                          {"é"}
                                          {"s "}
                                          {"à"}
                                          {" vos besoins m"}
                                          {"é"}
                                          {"tiers."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb449-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb447-7f1681b8"
                                        }
                                        id={
                                          "w-node-f807f6d1-1643-a581-cf58-1ddfb132bd6d-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>
                                            {"Automatisation intelligente"}
                                          </Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {
                                            "Optimisez vos processus, gagnez en efficacit"
                                          }
                                          {"é"}
                                          {"."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb458-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb456-7f1681b8"
                                        }
                                        id={
                                          "w-node-_81a98210-c6c4-fcf3-e0c3-108b18c0cc9b-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>
                                            {"Int"}
                                            {"é"}
                                            {"grations avanc"}
                                            {"é"}
                                            {"es"}
                                          </Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {
                                            "Connectez vos outils pour une performance maximale."
                                          }
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                </List>
                              </Block>
                              <Block
                                id={
                                  "w-node-ec77773e-dad7-1c35-0b67-43407c8cb490-7f1681b8"
                                }
                                tag={"div"}
                              >
                                <Block className={"eyebrow"} tag={"div"}>
                                  {"Micro-agents IA"}
                                </Block>
                                <List
                                  className={"mega-nav_list"}
                                  // @ts-ignore - User-defined custom attribute(s)
                                  role={"list"}
                                  tag={"ul"}
                                  unstyled={true}
                                >
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb46d-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb46b-7f1681b8"
                                        }
                                        id={
                                          "w-node-_9f30640f-1f64-d0c6-60e9-e2b460cf1f47-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>{"Prospection"}</Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {"G"}
                                          {"é"}
                                          {"n"}
                                          {"é"}
                                          {"rez des leads qualifi"}
                                          {"é"}
                                          {"s automatiquement."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb47e-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb47c-7f1681b8"
                                        }
                                        id={
                                          "w-node-_9f30640f-1f64-d0c6-60e9-e2b460cf1f52-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>{"Support client"}</Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {"Automatisez l"}
                                          {"’"}
                                          {"assistance et r"}
                                          {"é"}
                                          {"duisez les d"}
                                          {"é"}
                                          {"lais."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb48e-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb48c-7f1681b8"
                                        }
                                        id={
                                          "w-node-_9f30640f-1f64-d0c6-60e9-e2b460cf1f5d-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>
                                            {"RH "}
                                            {"&"}
                                            {" Comptabilit"}
                                            {"é"}
                                          </Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {
                                            "Simplifiez la gestion RH et la comptabilit"
                                          }
                                          {"é"}
                                          {"."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                </List>
                              </Block>
                              <Block
                                id={
                                  "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4bd-7f1681b8"
                                }
                                tag={"div"}
                              >
                                <Block className={"eyebrow"} tag={"div"}>
                                  {"Innovation IA"}
                                </Block>
                                <List
                                  className={"mega-nav_list"}
                                  // @ts-ignore - User-defined custom attribute(s)
                                  role={"list"}
                                  tag={"ul"}
                                  unstyled={true}
                                >
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4a1-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb49f-7f1681b8"
                                        }
                                        id={
                                          "w-node-_246168ec-5422-2d22-c1a6-e8b7eb4d77d8-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>{"ZyatrIA Lab"}</Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {"Prototypes, d"}
                                          {"é"}
                                          {
                                            "mos et innovations IA en avant-premi"
                                          }
                                          {"è"}
                                          {"re."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4ae-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4ac-7f1681b8"
                                        }
                                        id={
                                          "w-node-_246168ec-5422-2d22-c1a6-e8b7eb4d77e3-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>{"Diagnostic IA"}</Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {"Recevez un rapport IA personnalis"}
                                          {"é"}
                                          {" gratuit."}
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                  <ListItem
                                    className={"margin-bottom_none"}
                                    id={
                                      "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4bb-7f1681b8"
                                    }
                                  >
                                    <Link
                                      block={"inline"}
                                      button={false}
                                      className={"mega-nav_link-item"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      <Block
                                        className={"icon is-medium on-inverse"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"currentColor"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 32 32"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                            }
                                            strokeLinejoin={"round"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                      <Block
                                        className={
                                          "w-node-ec77773e-dad7-1c35-0b67-43407c8cb4b9-7f1681b8"
                                        }
                                        id={
                                          "w-node-_246168ec-5422-2d22-c1a6-e8b7eb4d77ee-ad6d2e56"
                                        }
                                        tag={"div"}
                                      >
                                        <Block tag={"div"}>
                                          <Strong>{"Success Pack"}</Strong>
                                        </Block>
                                        <Block
                                          className={
                                            "paragraph_small text-color_secondary"
                                          }
                                          tag={"div"}
                                        >
                                          {"D"}
                                          {"é"}
                                          {
                                            "marrez avec un pack IA tout inclus."
                                          }
                                        </Block>
                                      </Block>
                                    </Link>
                                  </ListItem>
                                </List>
                              </Block>
                            </Grid>
                          </ListItem>
                          <ListItem
                            className={
                              "flex_horizontal w-node-ec77773e-dad7-1c35-0b67-43407c8cb4da-7f1681b8"
                            }
                            id={
                              "w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ede-ad6d2e56"
                            }
                          >
                            <Link
                              block={"inline"}
                              button={false}
                              className={
                                "card-link is-inverse flex-child_expand on-inverse"
                              }
                              options={{
                                href: "#",
                              }}
                            >
                              <Block className={"card_body"} tag={"div"}>
                                <Block
                                  className={"heading_tertiary"}
                                  tag={"div"}
                                >
                                  {"Acc"}
                                  {"é"}
                                  {"l"}
                                  {"é"}
                                  {"rez votre croissance avec l"}
                                  {"’"}
                                  {"IA"}
                                </Block>
                                <Paragraph
                                  className={
                                    "paragraph_small text-color_inverse-secondary"
                                  }
                                >
                                  {"Automatisation, agents IA, micro-agents sp"}
                                  {"é"}
                                  {"cialis"}
                                  {"é"}
                                  {
                                    "s : tout pour transformer votre entreprise."
                                  }
                                </Paragraph>
                                <Block
                                  className={"margin_top-auto"}
                                  tag={"div"}
                                >
                                  <Block className={"button-group"} tag={"div"}>
                                    <Block
                                      className={
                                        "text-button is-secondary on-inverse"
                                      }
                                      tag={"div"}
                                    >
                                      <Block tag={"div"}>
                                        {"D"}
                                        {"é"}
                                        {"couvrir"}
                                      </Block>
                                      <Block
                                        className={"button_icon"}
                                        tag={"div"}
                                      >
                                        <DOM
                                          fill={"none"}
                                          height={"100%"}
                                          tag={"svg"}
                                          viewBox={"0 0 16 16"}
                                          width={"100%"}
                                          xmlns={"http://www.w3.org/2000/svg"}
                                        >
                                          <DOM
                                            d={
                                              "M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                            }
                                            stroke={"currentColor"}
                                            strokeLinejoin={"round"}
                                            strokeWidth={"2"}
                                            tag={"path"}
                                          />
                                        </DOM>
                                      </Block>
                                    </Block>
                                  </Block>
                                </Block>
                              </Block>
                            </Link>
                          </ListItem>
                        </List>
                      </Block>
                    </DropdownList>
                  </DropdownWrapper>
                </ListItem>
                <ListItem className={"nav_menu-list-item"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"nav_link on-inverse"}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block tag={"div"}>
                      {"À"}
                      {" propos"}
                    </Block>
                  </Link>
                </ListItem>
                <ListItem className={"nav_menu-list-item"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"nav_link on-inverse"}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block tag={"div"}>{"Blog"}</Block>
                  </Link>
                </ListItem>
                <ListItem className={"nav_menu-list-item"}>
                  <DropdownWrapper
                    className={"nav_dropdown-menu"}
                    delay={0}
                    hover={false}
                    tag={"div"}
                  >
                    <DropdownToggle
                      className={"nav_link on-inverse"}
                      tag={"div"}
                    >
                      <Block tag={"div"}>{"Support"}</Block>
                      <Icon
                        className={"nav_caret"}
                        widget={{
                          type: "icon",
                          icon: "dropdown-toggle",
                        }}
                      />
                    </DropdownToggle>
                    <DropdownList className={"nav_dropdown-list-1"} tag={"div"}>
                      <Block
                        className={"nav-menu_dropdown-list-wrapper"}
                        tag={"div"}
                      >
                        <List
                          className={"flex_vertical margin-bottom_none"}
                          // @ts-ignore - User-defined custom attribute(s)
                          role={"list"}
                          tag={"ul"}
                          unstyled={true}
                        >
                          <ListItem className={"margin-bottom_none"}>
                            <Link
                              block={"inline"}
                              button={false}
                              className={"nav_dropdown-link"}
                              options={{
                                href: "#",
                              }}
                            >
                              <Block className={"button_label"} tag={"div"}>
                                {"Centre d"}
                                {"’"}
                                {"aide"}
                              </Block>
                            </Link>
                          </ListItem>
                          <ListItem className={"margin-bottom_none"}>
                            <Link
                              block={"inline"}
                              button={false}
                              className={"nav_dropdown-link"}
                              options={{
                                href: "#",
                              }}
                            >
                              <Block className={"button_label"} tag={"div"}>
                                {"Contact"}
                              </Block>
                            </Link>
                          </ListItem>
                        </List>
                      </Block>
                    </DropdownList>
                  </DropdownWrapper>
                </ListItem>
              </List>
            </NavbarMenu>
            <Block className={"button-group margin-top_none"} tag={"div"}>
              <Link
                block={"inline"}
                button={false}
                className={"button on-inverse"}
                options={{
                  href: "#",
                }}
              >
                <Block className={"button_label"} tag={"div"}>
                  {"Commencer"}
                </Block>
              </Link>
            </Block>
          </Block>
          <NavbarButton className={"nav_mobile-menu-button"} tag={"div"}>
            <Block className={"icon on-inverse"} tag={"div"}>
              <DOM
                height={"24"}
                tag={"svg"}
                viewBox={"0 0 24 24"}
                width={"24"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <DOM
                  className={"nc-icon-wrapper"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeLinecap={"square"}
                  strokeLinejoin={"miter"}
                  strokeMiterlimit={"10"}
                  strokeWidth={"1.5"}
                  tag={"g"}
                >
                  <DOM
                    stroke={"currentColor"}
                    tag={"line"}
                    x1={"1"}
                    x2={"23"}
                    y1={"12"}
                    y2={"12"}
                  />
                  <DOM tag={"line"} x1={"1"} x2={"23"} y1={"5"} y2={"5"} />
                  <DOM tag={"line"} x1={"1"} x2={"23"} y1={"19"} y2={"19"} />
                </DOM>
              </DOM>
            </Block>
          </NavbarButton>
        </NavbarWrapper>
      </Block>
    </div>
  );
}
