import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import WarningIcon from '@material-ui/icons/Warning';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhoneIcon from '@material-ui/icons/Phone';

function VTimeline (props) {
    const { data } = props;

    return (

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0,141,201', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0,141,201' }}
                iconStyle={{ background: 'rgb(0,141,201)', color: '#fff' }}
                icon={<PhoneCallbackIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound:</h5>
                <br />
                <p>
                Call back scheduled for <b>{data['cdp-name']}</b> pertaining to <b>Welfare Check</b>
                </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                iconStyle={{ background: 'rgb(218,22,16)', color: '#fff' }}
                icon={<PhoneIphoneIcon />}
             >
                <h5 className="vertical-timeline-element-title">Mobile App:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">PCR Test Results</h6>
                <p>
                Navigated to <b>get results</b> after viewing <b>health declaration</b>
                </p>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0,141,201', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0,141,201' }}

                iconStyle={{ background: 'rgb(0,141,201)', color: '#fff' }}
                icon={<ChatIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound Chat:</h5>
                <br/>
                <h6 className="vertical-timeline-element-subtitle">entrypoint - Website</h6>
                <p>
                Chat session with Bot escalated to human agent Eli Kennedy
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"       
                iconStyle={{ background: 'rgb(242,47,70)', color: '#fff' }}
                contentStyle={{ border: '3px solid rgb(242,47,70)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(242,47,70)' }}
                icon={<WarningIcon />}
            >
                <h5 className="vertical-timeline-element-title">Alert:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Potential for Harm Flagged</h6>
                <p>
                
                Potential for risk of harm flagged by <b>Andrew Leang</b> outbound SMS welfare check subscription created
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(0,141,201', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0,141,201' }}
                iconStyle={{ background: 'rgb(0,141,201)', color: '#fff' }}
                icon={<LanguageIcon/>}
            >
                <h5 className="vertical-timeline-element-title">Website Visited:</h5>
                <br/>
                <h6 className="vertical-timeline-element-subtitle">Desktop site visit</h6>
                <p>
                Accessed information on <b>Anxiety</b> and viewed <b> Community Resources</b> landing page
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(0,141,201', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0,141,201' }}
                iconStyle={{ background: 'rgb(0,141,201)', color: '#fff' }}
                icon={<PhoneIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound Call</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Councilor Line</h6>
                <p>
                Call to <b>General enquiries</b> and spoke with <b>Eli Kennedy</b> call disposition <b>Referral to local GP</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}

export default withTaskContext(VTimeline);
