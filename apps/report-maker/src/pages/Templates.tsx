import ReportCard from "../components/ReportCard";

function Templates() {
  const role = parseInt(localStorage.getItem("role") as string);

  return (
    <div className="lets-do container">
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Templates</h1>
            {role === 1 && (
              <div className="btn-toolbar mb-2 mb-md-0">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: "middle" }}>
                    add_circle
                  </span>
                </button>
              </div>
            )}
          </div>

          <section className="card-area">
            <ReportCard title="CBC" price={0} />
            <ReportCard title="Tanduri Chicken" price={0} />
            <ReportCard title="Kelami Chicken" price={0} />
            <ReportCard title="Haddiwala Meat" price={0} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Templates;
