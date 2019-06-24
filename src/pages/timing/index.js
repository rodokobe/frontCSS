import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import Card from "../../components/cards/CardUI";
import { CardColumns, Row } from "react-bootstrap";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class Timing extends Component {
  render() {
    const data = [
      {
        year: "1991",
        value: 3
      },
      {
        year: "1992",
        value: 4
      },
      {
        year: "1993",
        value: 3.5
      },
      {
        year: "1994",
        value: 5
      },
      {
        year: "1995",
        value: 4.9
      },
      {
        year: "1996",
        value: 6
      },
      {
        year: "1997",
        value: 7
      },
      {
        year: "1998",
        value: 9
      },
      {
        year: "1999",
        value: 13
      }
    ];
    const cols = {
      value: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };

    return (
      <section id="global-indicators">
        <div>
          <text className="intro-1">Timing</text>
        </div>
        <article key="ok" className="main">
          <div className="charts">
            <CardColumns>
              <Chart height={400} data={data} scale={cols} forceFit>
                <text className="intro">Requests Vs Time</text>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                  crosshairs={{
                    type: "y"
                  }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                  type="point"
                  position="year*value"
                  size={4}
                  shape={"circle"}
                  style={{
                    stroke: "#fff",
                    lineWidth: 1
                  }}
                />
              </Chart>

              <Chart height={400} data={data} scale={cols} forceFit>
                <text className="intro">Evalution Time Vs Time</text>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                  crosshairs={{
                    type: "y"
                  }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                  type="point"
                  position="year*value"
                  size={4}
                  shape={"circle"}
                  style={{
                    stroke: "#fff",
                    lineWidth: 1
                  }}
                />
              </Chart>
            </CardColumns>
          </div>
        </article>
      </section>
    );
  }
}
export default Timing;
