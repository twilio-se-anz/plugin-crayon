import React, { useState, useEffect } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import SwipeableViews from 'react-swipeable-views';
import SegmentData from "./SegmentData";
import HTimelineCard from "./HTimelineCard";

export default function HTimeline(props)  {
    const { data } = props;
    const accentColor = data['cdp-accent'];
    const [curIdx, setCurIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(0);
    const [divSize, setDivSize] = useState('99%');
    
    const keyFunction = (event) => {
        if (event.keyCode === 37 && curIdx > 0) {
          setCurIdx(curIdx - 1);
        } else if (event.keyCode === 39 && curIdx < 3) {
          setCurIdx(curIdx + 1);
        }
      };
    
      useEffect(() => {
        document.addEventListener("keydown", keyFunction);
    
        return () => {
          document.removeEventListener("keydown", keyFunction);
        };
      }, [keyFunction]);

    useEffect(() => {
        setTimeout(() => {100, setDivSize('100%')});
    }, []);

    return (
      <div style={{display: 'flex', flexDirection: 'column', height: divSize, minHeight:'99%', width:'100%', justifyContent:"flex-end",}}>
        <div
          style={{
            maxWidth: "100%",
            height: "42%",
            fontSize: "20px",
            fontWeight: "800",
            backgroundImage: `url(https://images-5674.twil.io/daynight_redux.png)`,
            backgroundSize: "100% 100%",
            justifyContent:"flex-end",
            flexDirection: "column",
            display: "flex",
            

            
          }}
        >
            <div style={{marginBottom: '1%', height: '38%', width: '100%', color: "white", textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
}}>
            <HorizontalTimeline
                styles={{
                    foreground: "#000",
                    outline: "#fff",
                    height: "100%",
                    width: "10%",
                }}
                index={curIdx}
                indexClick={(index) => {
                setPrevIdx(curIdx);  
                setCurIdx(index);
                }}
                values={SegmentData.map((x) => x.data)}
                getLabel={date=>SegmentData.filter(x=>x.data==date).map((q)=> {return q.time})}
            />
          </div>
        </div>
        <SwipeableViews style={{height: '58%', width: '100%'}} index={curIdx}>
          <HTimelineCard data={data} SegmentData={SegmentData[curIdx]} />
          <HTimelineCard data={data} SegmentData={SegmentData[curIdx]} />
          <HTimelineCard data={data} SegmentData={SegmentData[curIdx]} />
          <HTimelineCard data={data} SegmentData={SegmentData[curIdx]} />
        </SwipeableViews>
      </div>
    );
}