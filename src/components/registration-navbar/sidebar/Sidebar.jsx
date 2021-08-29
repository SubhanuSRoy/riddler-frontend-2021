import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            ABOUT
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="tracks"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            TRACKS
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="faqs"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            FAQs
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="sponsors"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            SPONSORS
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            CONTACT US
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="#" target="_blank">SOLUTIONS</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
