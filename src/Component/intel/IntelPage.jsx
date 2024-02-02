import React, {useEffect, useState} from "react";
import { IntelAPI } from "./IntelAPI";
import { useParams } from "react-router-dom";
import IntelDetail from "./IntelDetail";

const IntelPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [intel, setProject] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams();
    const id = Number(params.id)

    useEffect(()=>{
        setLoading(true)
        IntelAPI.find(id).then(data =>{
            setProject(data);
            setLoading(false);
        }).catch(e =>{
            setError(e);            
            setLoading(false);
        });
    }, [id]);

    return(
        <div>
            <h1> Specification Detail</h1>
            {loading &&(
                <div className="center-page">
                    <span className="spinner primary"></span>
                    </div>
            )}

            {error &&(
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            {intel && <IntelDetail intel={intel}/>}
        </div>
    )
}

export default IntelPage