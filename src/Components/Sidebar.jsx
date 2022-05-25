import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";

function Sidebar(props) {
    const [Currentlink,setCurrentlink] = useState(0)
    return (
        <>
        <Section>
         <div className="top">
             <div className="brand">
                 <FaTaxi/>
                 <span>my taxi</span>
             </div>
             <div className="toggle"></div>
             <div className="links">
                 <ul>
                     <li onClick={()=>setCurrentlink(1)} className={Currentlink === 1 ? 'Active' : ''}>
                         <a href="#">
                         <MdSpaceDashboard/>
                         <span>Riders</span>    
                         </a>
                     </li>
                     <li onClick={()=>setCurrentlink(2)} className={Currentlink === 2 ? 'Active' : ''}>
                         <a href="#">
                         <RiDashboard2Fill/>
                         <span>Dashboard</span>    
                         </a>
                     </li>
                     <li onClick={()=>setCurrentlink(3)} className={Currentlink === 3 ? 'Active' : ''}>
                         <a href="#">
                         <FaAddressCard/>
                         <span>Payment Details</span>    
                         </a>
                     </li>
                     <li onClick={()=>setCurrentlink(4)} className={Currentlink === 4 ? 'Active' : ''}>
                         <a href="#">
                         <GiTwirlCenter/>
                         <span>Learning Center</span>    
                         </a>
                     </li>
                     <li onClick={()=>setCurrentlink(5)} className={Currentlink === 5 ? 'Active' : ''}>
                         <a href="#">
                         <BsFillChatTextFill/>
                         <span>FAQs</span>    
                         </a>
                     </li>
                     <li onClick={()=>setCurrentlink(6)} className={Currentlink === 6 ? 'Active' : ''}>
                         <a href="#">
                         <IoSettings/>
                         <span>Setting</span>    
                         </a>
                     </li>
                 </ul>

             </div>
             </div>
             <div className="logout">
                 <a href="#">
                  <FiLogOut/>
                  <span className="logout">Logout</span>
                 </a>
                 </div>     
        </Section>  
        </>
    );
}

export default Sidebar;

const Section = styled.section`
position: fixed;
left: 0;
background-color: #212121;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;
.top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;


