// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    padding-top: 30px;
`;

export const Logo = styled.img`
    width: 130px;
    height: auto;
    cursor: pointer;
`;

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
`;

export const NavLink = styled.a`
    margin-right: 32px;
    color: #000;
`;

export const Header = styled.div`
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const NavBox = styled.div`
    background: grey;
    width: auto;
    padding: 5px 10px;
    color: #fff;
`;

export const Middle = styled.div`
    display: block;
    text-align: center;
    padding-top: 80px;
`;

export const MiddleButton = styled.div`
    display: block;
    text-align: center;
    width: 200px;
    background: grey;
    margin: 0 auto;
    padding: 15px 35px;
    color: #fff;
`;

export const MiddleBanner = styled.img`
    width: 100%;
    height: 650px;
    margin-top: 70px;
`;

export const Leader = styled.div`
    padding-top: 180px;
    padding-bottom: 118px;
    background: #E4F0FC;
    margin-top: -100px;
`;

export const LeaderTitle = styled.div`
    text-align: center;
`;

export const LeaderBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
`;

export const TabContainer = styled.div`
    margin-top: 144px; 
`;

export const InnerTab = styled.div`
    margin-top: 70px; 
    width: 100%;
`;

export const TabBox = styled.div`
    width: 47%;
    height: 180px;
    border-radius: 4px;
    background-color: #F7F9FB;
    margin: 10px;
    padding: 20px 30px;
    display: inline-block;
`;

export const TabIcon = styled.img`
    vertical-align: top;
    margin-top: -10px;
`;

export const TabContent = styled.div`
    width: 80%;
    display: inline-block;
    padding-left: 20px;
`;

export const BannerSection = styled.div`
    margin-top: 110px;
    height: 190px;
    background: #E4F0FC;
`;

export const BannerBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    text-align: center;
`;

export const GridContainer = styled.div`
    background-color: #F7F9FB;
    padding-top: 144px;
`;

export const AlternateGridContainer = styled.div`
    background-color: #ffffff;
`;

export const GridTitle = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 730px;
`;

export const InnerGrid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-top: 70px;
`;

export const InnerGridBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
`;

export const SeparateLine = styled.div`
    height: 1px;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
`;

export const Testimonial = styled.div`
    background: #E7EDFB;
    padding: 144px 0;
`;

export const TestimonialInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const TestImage = styled.img`
    vertical-align: top;
`;

export const TestBox = styled.div`
    padding-left: 80px;
`;

export const SmallBanner = styled.div`
    width: 100%;
    margin-top: 68px;
    color: #222;
    padding: 64px 80px;
    font-size: 18px;
    border-radius: 8px;
    background-color: rgb(0, 255, 191);
    display: flex;
    justify-content: space-between;
`;

export const SmallBannerInner = styled.div`
    flex-grow: 0;
    max-width: 50%; 
    flex-basis: 50%;
`;

export const SmallBannerImage = styled.div`
    flex-grow: 0;
    max-width: 50%; 
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
`;

export const SmallBannerIcon = styled.img`
    width: 70%;
    max-width: 100%;
    margin-top: -24px;
`;

export const SmallBannerButton = styled.div`
    display: block;
    text-align: center;
    width: 210px;
    background: #000;
    padding: 15px 35px;
    color: #fff;
    margin-top: 30px;
`;

export const Footer = styled.div`
    margin-top: 60px;
`;

export const FooterInner = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 32px 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
    justify-content: space-between;
`;

export const FooterColumn = styled.div`
    text-align: left;
`;

export const FooterLinks = styled.a`
    color: #222;
    cursor: pointer;
    display: block;
    font-size: 12px;
    margin-top: 16px;
`;

export const CopyRight = styled.div`
    color: #222;
    display: flex;
    padding: 25px 5px 88px;
    font-size: 14px;
    justify-content: space-between;
`;
