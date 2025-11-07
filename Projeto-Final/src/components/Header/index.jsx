import React from "react";
import { HeaderContainer, Logo, Nav, NavItem, ProfileImage, LinhaSuperior, BlocoProfile, BlocoActions, Span, FindButton } from "./styles";
import { GoBook } from 'react-icons/go';
import { PiBookBookmarkLight } from 'react-icons/pi';
import { PiNotebook } from 'react-icons/pi';
import { PiPackageLight } from 'react-icons/pi';
import { PiStar } from 'react-icons/pi';
import { LuSquareMenu } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa6';
import { BiSolidDownArrow } from 'react-icons/bi';
import { AiOutlineInbox } from 'react-icons/ai';
import { LuGitCommitVertical } from 'react-icons/lu';
import { FaRegCircleDot } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import { TbBrandGithubCopilot } from 'react-icons/tb';

const Header = () => {
    return (
        <HeaderContainer>
            <LinhaSuperior>
                <div>
                    <BlocoProfile>
                        <LuSquareMenu size={36} />
                        <Logo><img style={{ width: "100%" }} src="../../../Assets/logo-github-white.png"></img></Logo>
                        <h3>gisellegarciaz</h3>
                    </BlocoProfile>
                </div>
                <div>
                    <BlocoActions>
                        <FindButton
                            placeholder="Type / to search"/>
                        <Span><TbBrandGithubCopilot size={18} /><BiSolidDownArrow size={10} /></Span>
                        <span>|</span>
                        <Span><FaPlus size={18} /><BiSolidDownArrow size={10} /></Span>
                        <Span><FaRegCircleDot size={18} /></Span>
                        <Span><LuGitCommitVertical size={22} /></Span>
                        <Span><AiOutlineInbox size={18} /></Span>
                        <ProfileImage
                            src="../../../Assets/gisellegarciaz-profilePic.png"
                        />
                    </BlocoActions>
                </div>
            </LinhaSuperior>

            <Nav>
                <NavItem><GoBook size={15} /> Overview</NavItem>
                <NavItem><PiBookBookmarkLight size={15} /> Repositories</NavItem>
                <NavItem>< PiNotebook size={15} /> Projects</NavItem>
                <NavItem>< PiPackageLight size={15} /> Packages</NavItem>
                <NavItem><PiStar size={15} /> Stars</NavItem>
            </Nav>


        </HeaderContainer>
    );
};

export default Header;
