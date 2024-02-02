import React, { useEffect, useState } from "react";
import IntelList from "./IntelList";
import { IntelAPI } from "./IntelAPI";
import Project from "../Project";
import "../List.css"

const IntelPages = () => {
  const [Gpuintel, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        // Ensure to pass the correct endpoint (url3) to fetch Intel GPU data
        const data = await IntelAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((Gpuintel) => [...Gpuintel, ...data]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, [currentPage]);

  const saveProject = (intel) => {
    IntelAPI.put(intel).then((updatedProject) => {
      let updatedProjects = Gpuintel.map((p) =>
        p.id === intel.id ? new Project(updatedProject) : p
      );
      setProjects(updatedProjects);
    }).catch((e) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    });
  };

  return (
    <>
      <h1>Intel ARC GPU's</h1>

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

      <IntelList onSave={saveProject} Gpuintel={Gpuintel} />

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
          <span className="spinner primary"></span>
        </div>
      )}
    </>
  );
};

export default IntelPages;
