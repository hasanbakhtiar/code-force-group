
const SingleCard = ({alldata}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card" >
                <img src={alldata.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.login}</h5>
                    <p className="card-text">{alldata.node_id}</p>
                    <a target="_blank" href={alldata.html_url} className="btn btn-dark">Go profile</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard