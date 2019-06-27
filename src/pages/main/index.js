import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import Card from "../../components/cards/CardUI";

import { CardColumns, Table } from "react-bootstrap";
import Footer from "../../components/footer";

class App extends Component {
  state = {
    totalIssues: {},
    percentnotevaluated: [],
    averagepriority: [],
    averagerating: [],
    standarddeviation: [],
    faster: [],
    bestrate: [],
    isLoaded: false,
  };

  async componentDidMount() {

    // Make first two requests
    const [resTotalIssues, resPercNotEvaluated, resAverageProprity, resAverageRating, resStandandardDeviation, resFaster, resBestRates] = await Promise.all([


      api.get(`/totalIssues`),
      api.get(`/percentNotEvaluated`),
      api.get(`/averageByPriority`),
      api.get(`/averageRating`),
      api.get(`/standardDeviation`),
      api.get(`/responseFaster`),
      api.get(`/bestRates`)
    ]);

    // Update state once with all 2 responses
    this.setState({
      totalIssues: resTotalIssues.data,
      percentnotevaluated: resPercNotEvaluated.data,
      averagepriority: resAverageProprity.data,
      averagerating: resAverageRating.data,
      standarddeviation: resStandandardDeviation.data,
      faster: resFaster.data,
      bestrate: resBestRates.data,
      isLoaded: true
    });

  }

  render() {
    let contadorItems = 0;
    var { totalIssues, percentnotevaluated, averagepriority, averagerating, standarddeviation,
      faster, bestrate, isLoaded } = this.state;

    console.log(totalIssues, percentnotevaluated, averagepriority, averagerating, standarddeviation,
      faster, bestrate)

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <section id="global-indicators">
          <article key="ok" className="main">
            <div>
              <div>
                <p className="intro">Indicadores Globais</p>
              </div>

              <div className="cards-main">
                <CardColumns>
                  <Card cardName={"Total de pedidos"} cardValue={totalIssues.total} />
                  <Card cardName={"% pedidos não avaliados"} cardValue={percentnotevaluated[0].percentNonEvaluated} />
                  <Card cardName={"Avaliação média qualidade"} cardValue={averagerating[0].averageEvaluation} />
                  <Card cardName={"Desvio padrão votações"} cardValue={standarddeviation[0].standardDeviation} />
                  <Card cardName={"Tempo Médio por Nível"} cardValue={averagepriority[0]._id.name + " (" + averagepriority[0].avgResponseTime + ")"}
                                                           cardValue1={averagepriority[1]._id.name + " (" + averagepriority[1].avgResponseTime + ")"}
                                                           cardValue2={averagepriority[2]._id.name + " (" + averagepriority[2].avgResponseTime + ")"} />
                </CardColumns>
              </div>

              <div>
                <p className="name-table">Faster Employee</p>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="1">Position</th>
                      <th colSpan="1">Name</th>
                      <th colSpan="1">Average time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.faster.map(fast => (
                      <tr>
                        <td key={fast.id}>{contadorItems += 1}</td>
                        <td>{fast._id.name}</td>
                        <td>{fast.avgResponseTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <div>
                <p className="name-table">Best Rates</p>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="1">Position</th>
                      <th colSpan="1">Name</th>
                      <th colSpan="1">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.bestrate.map(best => (
                      <tr>
                        <td key={best.id}>{(contadorItems += 1)-10}</td>
                        <td>{best._id.name}</td>
                        <td>{best.averageEvaluation}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </article>
        </section>

      );
    }
  }
}
export default App;
