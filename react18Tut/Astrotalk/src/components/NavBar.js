import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assests/logo.jpg";

import { FaPowerOff, FaSearch } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  SetAstroSubCatgory,
  SetUserData,
  setastrosubcategory,
} from "../store/reducer";
import { toast } from "react-toastify";
export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { astrocategory } = useSelector((state) => state?.astrologers);
  console.log("astrocategory", astrocategory);
  const { data } = useSelector((state) => state?.authUser);

  const LogOut = () => {
    dispatch(SetUserData({}));
    navigate("/");
    toast.success("User Loged Out Successfully!!");
  };
  const links = [
    { name: "Home", link: "/AstroPage" },
    { name: "Astrologers", link: "/Astrologers" },
    { name: "Book A pooja", link: "/movies" },
    // { name: "User's PlayGround", link: "/futureForcasting" },
  ];

  const handlenavigate = (name, id) => {
    if (id) {
      dispatch(SetAstroSubCatgory(id));
      navigate(`/categories/${name}/${id}`);
    }
  };

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <>
                  <li key={name}>
                    <Link to={link}>{name}</Link>
                  </li>
                </>
              );
            })}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                User's PlayGround
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/futureForcasting");
                  }}
                >
                  Forcasting through birth date
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/birthcart");
                  }}
                >
                  Forcasting through Birth Cart
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/scripturequery");
                  }}
                >
                  Scripture Query
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          {(data && data?.data) || (data && data?.data?._id) ? (
            <button onClick={LogOut}>
              <FaPowerOff />
            </button>
          ) : (
            ""
          )}
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;

    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;
