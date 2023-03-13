import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Data } from "./Data";
import { SubMenu } from "./SubMenu";

import styled from "styled-components";


export function NavBar() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  
  return (
    <div>
      <IconContext.Provider value={sidebar?{ color: "#ffffff" }:{ color: "#000000" }}>
        <Navcami>
          <Camilo to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Camilo>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <Camilo1 to="#">
                <AiIcons.AiOutlineClose
                  onClick={showSidebar}
                ></AiIcons.AiOutlineClose>
              </Camilo1>
              {Data.map((item, index) => {
                return <SubMenu key={index} item={item}  close={showSidebar}/>;
              })}
            </SidebarWrap>
          </SidebarNav>
        </Navcami>
      </IconContext.Provider>
    </div>
  );
}

const Navcami = styled.div`  
  position: fixed;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
`;

const Camilo = styled(Link)`  
  margin-left: 1.5rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const Camilo1 = styled(Link)`  
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const SidebarNav = styled.nav`
  background: #0e111f;
  width: 220px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

