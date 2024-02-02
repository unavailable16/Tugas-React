import React, {useEffect, useState} from "react";
import { NvAPI } from "./NvAPI";
import { useParams } from "react-router-dom";
import NvDetail from "./NvDetail";

const NvPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [nvidia, setProject] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams();
    const id = Number(params.id)

    useEffect(()=>{
        setLoading(true)
        NvAPI.find(id).then(data =>{
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
            {nvidia && <NvDetail nvidia={nvidia}/>}
        </div>
    )
}

export default NvPage