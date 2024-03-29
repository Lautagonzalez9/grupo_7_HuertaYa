import React from "react";
import ContentRowTop from "../../components/ContentRowTop/ContentRowTop";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";

class ContentWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            arrayData: [],
            columns: { name: "Nombre", lastname: "Apellido"}
        }
    }

    async componentDidMount() {
        this.setState({
            arrayData: [{name: "Marco", lastname: "Savarino"}, {name: "Julian", lastname: "Penna"}, {name: "Manuel", lastname: "Chirino"}, {name: "Vanesa", lastname: "Damill"}]
        })
    }

    render() {

        return (
            <div id="content">
                {/* <!-- Content Row Top --> */}
                <ContentRowTop />
                {/* <!--End Content Row Top--> */}
                {<Table data={this.state.arrayData} columns={this.state.columns} />}
            </div>
        )
    }
}

export default ContentWrapper;