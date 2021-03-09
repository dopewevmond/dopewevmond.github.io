const RenderJokes = ({joke, isLoadingJoke, errMess}) => {
    if (isLoadingJoke) {
        return (
            <Loading />
        );
    } else if (errMess) {
        return (
            <div className="alert alert-danger py-4">
                {errMess}
            </div>
        );
    }
    else if (joke && joke !== null)  {
        return (
            <div className="card">
                <div className="card-body bg-light">
                    <blockquote className="blockquote">
                        <div className="media">
                            <img src="./images/small_chuck.png" alt="chuck norris" className="mr-2" />
                            <div className="media-body">
                                <p className="mb-0 text-left">{joke}</p>
                                <footer className="blockquote-footer">
                                    from the 
                                    <a href="https://api.chucknorris.io/" target="_blank">
                                        <cite> ChuckNorris.io API</cite>
                                    </a>
                                </footer>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
            
        );
    } else {
        return (
            <div></div>
        );
    }
}

const RenderCategories = ({categories_array, getJoke}) => {
    if (categories_array) {
        const categories = categories_array.map( (category, idx) => {
            return (
                <a className="dropdown-item pointer" key={idx} onClick={() => getJoke(category)}>
                    {category}
                </a>
            );
        });
        return (
            <div className="dropdown mb-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Joke Category
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {categories}
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const Loading = () => {
    return (
        <span className="fa fa-spinner fa-pulse fa-fw text-primary fa-2x"></span>
    );
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingJoke : false,
            errMess: null,
            joke: null,
            categories: null
        }
        this.getRandomJoke = this.getRandomJoke.bind(this);
        this.getJokeByCategory = this.getJokeByCategory.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }

    componentDidMount() {
        this.getCategories();
    }

    makeRequest(params) {
        const url = `https://api.chucknorris.io/jokes/${params}`;
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } else if (request.readyState === 4) {
                    reject('Unable to get resource');
                }
            });

            request.open('GET', url);
            request.send();
        });
    }

    getRandomJoke() {
        this.setState({isLoadingJoke: true, joke: null, errMess: null});
        this.makeRequest('random').then( data => {

            const { value } = data;

            this.setState({
                joke: value,
                errMess: null,
                isLoadingJoke: false
            });

        }).catch( data => {
            this.setState({
                errMess: "An error occured while trying to load the joke. Please check your internet connection and try again", 
                isLoadingJoke: false,
                joke: null
            });
        })
    }

    getCategories() {
        this.makeRequest('categories').then( data => {
            this.setState({categories: data});
        }).catch(data => {
            console.log('failed to get categories');
        });
    }


    getJokeByCategory(category) {
        this.setState({isLoadingJoke: true, joke: null, errMess: null});
        this.makeRequest(`random?category=${category}`).then( data => {

            const { value } = data;

            this.setState({
                joke: value,
                errMess: null,
                isLoadingJoke: false
            });

        }).catch( data => {
            this.setState({
                errMess: "An error occured while trying to load the joke. Please check your internet connection and try again", 
                isLoadingJoke: false, 
                joke: null
            });
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-12 py-3">
                        <h1>Chuck Norris Joke Generator</h1>
                    </div>

                    <div className="col-12 mb-1">
                        <RenderCategories categories_array={this.state.categories} getJoke={this.getJokeByCategory} />
                        <button onClick={this.getRandomJoke} className="btn btn-primary">
                            Get Random Joke
                        </button>
                    </div>
                    
                    <div className="col-12 py-2">
                        <hr />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 offset-md-3 col-md-6">
                        <RenderJokes joke={this.state.joke} isLoadingJoke={this.state.isLoadingJoke} errMess={this.state.errMess} />
                    </div>
                </div>        
            </React.Fragment>
        );
    }
}

const ContainerComponent = () =>  (
    <div className="container text-center">
        <div className="row">
            <div className="col-12 mt-2">
                <img src="./images/chuck.png" alt="chuck norris" width="50" />
            </div>
        </div>
        <Main />
    </div>      
);
ReactDOM.render(<ContainerComponent />, document.getElementById('root'));