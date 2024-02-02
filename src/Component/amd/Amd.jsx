import React, { useEffect, useState } from "react";
import AmdList from "./AmdList";
import { AmdAPI } from "./AmdAPI";
import Project from "../Project";

const AmdPages = () =>{
    const [Gpuamd, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const handleMoreClick = () =>{
        setCurrentPage(currentPage => currentPage +1)
    }
    
    useEffect(()=>{
         const loadProjects = async() =>{
            setLoading(true);
            try{
                const data = await AmdAPI.get(currentPage);
                if(currentPage === 1){
                    setProjects(data);
                }else{
                    setProjects((Gpuamd)=>[...Gpuamd, ...data])
                }
            } catch (e) {
                if(e instanceof Error){
                    setError(e.message);
                }
            }finally{
                setLoading(false)
            }
        }
        loadProjects()
    },[currentPage]);

    const saveProject = (amd) =>{
        AmdAPI.put(amd).then(updatedProject => {
            let updatedProjects = Gpuamd.map(p => {
                return p.id === amd.id ? new Project(updatedProject) : p;
            })
            setProjects(updatedProjects)
        })
        .catch((e) => {
            if(e instanceof Error){
                setError(e.message)
            }
        });
    };
    return(
        <>
            <h1>AMD Radeon GPU's</h1>

            {error && (
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

            <AmdList onSave={saveProject} Gpuamd={Gpuamd} />

            {!loading && !error && (
            <div className="row">
                <div className="col-sm-12">
                <div className="button-group fluid">
                    <button className="button default" onClick={handleMoreClick}>
                    More...
                    </button>
                </div>
                </div>
            </div>
            )}

            {loading && (
            <div className="center-page">
                {/* Assuming you want a spinner here */}
                <span className="   spinner secondary"></span>
            </div>
            )}
        </>
    )
}
export default AmdPages;