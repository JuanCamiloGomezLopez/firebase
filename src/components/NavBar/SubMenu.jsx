import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export function SubMenu({ item, close }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <div onClick={!item.subindice? close:null}>
      <SidebarLink to={item.path} onClick={item.subindice && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subindice && subnav ? item.iconOpened : item.iconClosed}
        </div>
      </SidebarLink>
      
      {subnav &&
        item.subindice.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={close}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
}


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
