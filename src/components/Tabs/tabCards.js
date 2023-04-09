import React, { Fragment } from 'react';
import { EditFilled, ContactsFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import { TabCardsPreview, TabCardsPreviewMain } from './styles';
import contact from "../../assets/icons/contact.svg";
import location from "../../assets/icons/location.svg";
import links from "../../assets/icons/links.svg";
import work from "../../assets/icons/work.svg";
import quotes from "../../assets/icons/quotes.svg";
import globe from "../../assets/icons/globe.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

const TabCards = () => {
    return (
        <TabCardsPreviewMain>
            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={contact} className="title_icon" />Contact</span>
                    <EditFilled className="edit_icon" />
                </div>
                <div className='card_body'>
                    <div className='mail_sec'>
                        <MailFilled className='mail_icon' />
                        <span className='mails'>salesteam@br.in / salesteam2@br.in</span>
                    </div>
                    <div className='number_badge'>
                        +5
                    </div>
                </div>
                <div className='card_footer'>
                    <PhoneFilled className='phone_icon' />
                    <span className='phone'>+91 9494978552 / 9493815946</span>
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={location} className="title_icon" />Address</span>
                    <EditFilled className="edit_icon" />
                </div>
                <div className='card_body_single'>
                    Monday To Friday - 9:00Am To 6:00Pm
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={work} className="title_icon" />House of operations</span>
                    <EditFilled className="edit_icon" />
                </div>
                <div className='card_body_single'>
                    Unispace Business Centre, EPIP Zone Whitefield Rd, Whitefield, Basavanna Nagar, Brookefield, Bengaluru, Karnataka 560066
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={links} className="title_icon" />Social Media & Links</span>
                    <EditFilled className="edit_icon" />
                </div>
                <div className='card_body_icons'>
                    <div className='icon_cont'>
                        <img src={globe} className='icon' />
                        Website
                    </div>
                    <div className='icon_cont'>
                        <img src={instagram} className='icon' />
                        Instagram
                    </div>
                    <div className='icon_cont'>
                        <img src={facebook} className='icon' />
                        Facebook
                    </div>
                    <div className='icon_cont'>
                        <img src={twitter} className='icon' />
                        Twitter
                    </div>
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={quotes} className="title_icon" />Statement</span>
                    <EditFilled className="edit_icon" />
                </div>
                <div className='card_body'>
                    <div className='mail_sec'>
                        <span className='mails'>You think it will link</span>
                    </div>
                    <div className='number_badge'>
                        +5
                    </div>
                </div>
            </TabCardsPreview>
        </TabCardsPreviewMain>
    )
}
export default TabCards