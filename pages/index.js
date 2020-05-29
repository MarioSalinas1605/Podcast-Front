export default class extends React.Component {
    render() {
      return <div>
        <h1>¡Hola Platzi!</h1>
        <p>Bienvenidos al curso de Next.JS</p>
        <img src="/static/KTM.jpg" alt="motorcycle"></img>

        <style jsx>{`
            h1 {
                color: red;
            }
            img {
                max-width: 50%;
                display: block;
                margin: 0 auto;
            }
        `}</style>
      </div>
    }
  }