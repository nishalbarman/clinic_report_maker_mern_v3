import { useEffect, useState } from "react";
import ReportCard from "../components/ReportCard.js";
import { useAppSelector } from "../redux/index.js";
import { ROLE } from "../roleEnumes.js";
import { handleGlobalError } from "../utils/index.js";
import axios from "axios";

type Template = {
  _id?: string;
  cardName: string;
  price: number;
  url: string;
  color_f: string;
  color_s: string;
  btn_name: string;
  keywords: string;
  new: boolean;
};

function Templates() {
  const { role } = useAppSelector((state) => state.auth);

  const [templateList, setTemplateList] = useState<Template[]>([]);

  const [paginationPage, setPaginationPage] = useState<number>(0);
  const [paginationLimit, setPaginationLimit] = useState<number>(30);

  const fetchTemplateList = async () => {
    try {
      const url = new URL("/templates/list", import.meta.env.VITE_SERVER_API);
      url.searchParams.append("page", String(paginationPage));
      url.searchParams.append("limit", String(paginationLimit));

      const response = await axios.get(url.href);

      setTemplateList(response.data?.templates || []);
    } catch (error) {
      handleGlobalError(error);
    }
  };

  useEffect(() => {
    fetchTemplateList();
  }, []);

  return (
    <div className="lets-do container">
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Templates</h1>
            {role === ROLE.ADMIN && (
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
            {templateList.map((item) => {
              return <ReportCard key={item._id} onClick={() => {}} {...item} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Templates;
