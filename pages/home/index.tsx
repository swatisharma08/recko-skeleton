// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    MainContainer,
    Container,
    Header,
    Logo,
    NavBar,
    NavLink,
    NavBox,
    Middle,
    MiddleButton,
    MiddleBanner,
    Leader,
    LeaderTitle,
    LeaderBox,
    TabContainer,
    InnerTab,
    TabBox,
    TabIcon,
    TabContent,
    BannerSection,
    BannerBox,
    AlternateGridContainer,
    GridContainer,
    GridTitle,
    InnerGrid,
    InnerGridBox,
    SeparateLine,
    Testimonial,
    TestimonialInner,
    TestImage,
    TestBox,
    SmallBanner,
    SmallBannerInner,
    SmallBannerImage,
    SmallBannerIcon,
    SmallBannerButton,
    Footer,
    FooterInner,
    FooterColumn,
    FooterLinks,
    CopyRight,
} from "@Styled/Home";
import { HomeActions } from "@Actions";
import { Heading, LocaleButton } from "@Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {

    const TabData = [
        {
            icon: '../images/foodtech.svg',
            title: 'Food Tech',
            content: 'Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.'
        },
        {
            icon: '../images/foodtech.svg',
            title: 'Food Tech',
            content: 'Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.'
        },
        {
            icon: '../images/foodtech.svg',
            title: 'Food Tech',
            content: 'Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.'
        },
        {
            icon: '../images/foodtech.svg',
            title: 'Food Tech',
            content: 'Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.'
        },
        {
            icon: '../images/foodtech.svg',
            title: 'Food Tech',
            content: 'Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.'
        },
        {
            icon: '../images/foodtech.svg',
            title: 'Food Tech',
            content: 'Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.'
        }
    ]

    return (
        <MainContainer>
            <Container>
                <Header>
                    <Logo src="/images/recko-logo.svg" alt="Recko Logo" />
                    <NavBar>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about/">About</NavLink>
                        <NavLink href="https://recko-team.freshteam.com/jobs" target="_blank" rel="noopener noreferrer" >We are hiring!</NavLink>
                        <NavBox>Request a demo</NavBox>
                    </NavBar>
                </Header>
                <Middle>
                    <h1>We help you reconcile</h1>
                    <h1>Revenue<span>|</span></h1><br/>
                    <h3>Recko enables AI-powered reconciliation of digital transactions & keeps track of the complete transaction lifecycle for organizations.</h3><br/>
                    <MiddleButton>Request a demo</MiddleButton>
                    <MiddleBanner src="/images/dashboard.svg" alt="dashboard"/>
                </Middle>
            </Container>
            <Leader>
                <Container>
                    <LeaderTitle>
                        <h5>Trusted by industry leaders</h5>
                    </LeaderTitle>
                    <LeaderBox>
                        <img src="/images/grofers.svg" alt="leader1"/>
                        <img src="/images/grofers.svg" alt="leader1"/>
                        <img src="/images/grofers.svg" alt="leader1"/>
                        <img src="/images/grofers.svg" alt="leader1"/>
                        <img src="/images/grofers.svg" alt="leader1"/>
                    </LeaderBox>
                </Container>
            </Leader>
            <Container>
                <TabContainer>
                    <LeaderTitle>
                        <h2>The industries we serve</h2>
                    </LeaderTitle>
                    <InnerTab>
                        {TabData.map((data, index) => {
                            return(
                                <TabBox>
                                    <TabIcon src={data.icon} alt="tab-icon"/>
                                    <TabContent>
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </TabContent>
                                </TabBox>
                            );
                        })}
                    </InnerTab>
                </TabContainer>
            </Container>
            <BannerSection>
                <Container>
                    <LeaderBox>
                        <BannerBox>
                            <h1>$5 Billion</h1>
                        </BannerBox>
                        <BannerBox>
                            <h1>$5 Billion</h1>
                        </BannerBox>
                    </LeaderBox>
                </Container>
            </BannerSection>
            <GridContainer>
                <Container>
                    <GridTitle>
                        <h1>What we do</h1>
                        <p>At Recko, we’re rehashing the transaction lifecycle so that businesses can manage it effortlessly. Here’s why market leaders across industries are moving to Recko.</p>
                    </GridTitle>
                    <InnerGrid>
                        <InnerGridBox>
                            <h2>Reconcile millions of <br/>transactions in minutes</h2>
                            <p>Recko is built on AI-powered algorithms that are designed for speed, scaling, and extraordinary accuracy. Reconcile millions of transactions in a matter of minutes, and the entire process from ingestion to reconciliation takes less than an hour.</p>
                            <SeparateLine /><p>“Recko has helped us manage large volumes of data seamlessly and thus carry out our core functions of revenue assurance.”</p>
                            <span><strong>Jatin Mazalcar,</strong> Chief Financial Officer at Meesho</span>
                        </InnerGridBox>
                        <InnerGridBox>
                            <img src="/images/volume.svg" alt="grid"/>
                        </InnerGridBox>
                    </InnerGrid>
                </Container>
            </GridContainer>
            <AlternateGridContainer>
                <Container>
                    <InnerGrid>
                        <InnerGridBox>
                            <img src="/images/volume.svg" alt="grid"/>
                        </InnerGridBox>
                        <InnerGridBox>
                            <h2>Reconcile millions of <br/>transactions in minutes</h2>
                            <p>Recko is built on AI-powered algorithms that are designed for speed, scaling, and extraordinary accuracy. Reconcile millions of transactions in a matter of minutes, and the entire process from ingestion to reconciliation takes less than an hour.</p>
                            <SeparateLine /><p>“Recko has helped us manage large volumes of data seamlessly and thus carry out our core functions of revenue assurance.”</p>
                            <span><strong>Jatin Mazalcar,</strong> Chief Financial Officer at Meesho</span>
                        </InnerGridBox>
                    </InnerGrid>
                </Container>
            </AlternateGridContainer>
            <Testimonial>
                <Container>
                    <TestimonialInner>
                        <TestImage src="/images/jatin.png" alt="profile"/>
                        <TestBox>
                            <h2>“Recko has helped us manage large volumes of data seamlessly”</h2><br/>
                            <p>“Recko has helped us manage large volumes of data seamlessly and thus carry out our core functions of revenue assurance, decision support and business partnering. We are excited to partner with Recko and leverage the cutting edge technology they are building to solve problems of the future.”</p>
                            <p><strong>Jatin Mazalcar,</strong> Chief Financial Officer, Meesho</p>
                        </TestBox>
                    </TestimonialInner>
                </Container>
            </Testimonial>
            <Container>
                <SmallBanner>
                    <SmallBannerInner>
                        <h1>Get in touch</h1>
                        <p>We believe awesome companies are built by awesome people. People who work hard, take risks and think big - and it starts with you.</p>
                        <SmallBannerButton>Request a demo</SmallBannerButton>
                    </SmallBannerInner>
                    <SmallBannerImage>
                        <SmallBannerIcon src="/images/demo.svg" alt="test"/>
                    </SmallBannerImage> 
                </SmallBanner>
                <Footer>
                    <FooterInner>
                        <FooterColumn>
                            <img src="/images/recko-cropped-logo.svg" alt="footer-logo"/>
                        </FooterColumn>
                        <FooterColumn>
                            <div><strong>Recko</strong></div>
                            <div><FooterLinks href="/about/">About Us</FooterLinks></div>
                            <div><FooterLinks href="/team/">Team</FooterLinks></div>
                            <div><FooterLinks href="https://recko-team.freshteam.com/jobs" target="_blank" rel="noopener noreferrer">Careers</FooterLinks></div>
                            <div><FooterLinks href="/news/">In the news</FooterLinks></div>
                            <div><FooterLinks href="/recko-raises-usd-6-million-in-series-a/">Press Releases</FooterLinks></div>
                        </FooterColumn>
                        <FooterColumn>
                            <div><strong>Legal</strong></div>
                            <div><FooterLinks href="/about/">About Us</FooterLinks></div>
                            <div><FooterLinks href="/team/">Team</FooterLinks></div>
                        </FooterColumn>
                        <FooterColumn>
                            <div><strong>Follow Us</strong></div>
                            <div><FooterLinks href="/about/">About Us</FooterLinks></div>
                            <div><FooterLinks href="/team/">Team</FooterLinks></div>
                        </FooterColumn>
                    </FooterInner>
                </Footer>
                <CopyRight>
                    <div>© recko</div>
                    <div>All rights reserved</div>
                </CopyRight>
            </Container>
        </MainContainer>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
