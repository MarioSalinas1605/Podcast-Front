export default class extends React.Component {

    static getInitialProps({ query }) {
        let idChannel = query.id
        console.log(idChannel);

        return {}
    }

    render() {
      return <div>
          <header>Podcasts</header>

          <style jsx>{`
            header {
                color #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>
      </div>
    } 
}